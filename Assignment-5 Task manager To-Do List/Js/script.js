document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const todoList = document.getElementById('todo-list');
    const emptyState = document.getElementById('empty-state');
    const addButton = document.getElementById('add-button');
    const newNoteModal = document.getElementById('new-note-modal');
    const newNoteInput = document.getElementById('new-note-input');
    const cancelButton = document.getElementById('cancel-button');
    const applyButton = document.getElementById('apply-button');
    const searchInput = document.getElementById('search-input');
    const filterButton = document.getElementById('filter-button');
    const filterDropdown = document.getElementById('filter-dropdown');
    const filterItems = document.querySelectorAll('.dropdown-item');
    const themeToggle = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const undoContainer = document.getElementById('undo-container');
    const undoButton = document.getElementById('undo-button');
    
    // Initial todos
    let todos = [
        { id: 1, text: 'HTML & CSS #1', completed: false },
        { id: 2, text: 'JavaScript #2', completed: true },
        { id: 3, text: 'Muhammad Raza #3', completed: false }
    ];
    
    let activeNoteId = null;
    let currentFilter = 'all';
    let lastAction = null;
    let lastActionData = null;
    let undoTimeout = null;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Update theme toggle icon based on current theme
    updateThemeIcon();
    
    // Initialize the app
    function init() {
        loadTodos();
        renderTodos();
        setupEventListeners();
    }
    
   
function renderTodos() {
    const filteredTodos = filterTodos(todos, currentFilter);

    // Step 1: اگر filteredTodos خالی ہوں
    if (filteredTodos.length === 0) {
        todoList.classList.add('hidden'); // todos کی لسٹ چھپ جائے گی
        emptyState.classList.remove('hidden'); // empty state دکھے گا
    } else {
        todoList.classList.remove('hidden'); // اگر نتائج ہوں تو todos دکھائیں
        emptyState.classList.add('hidden'); // empty state چھپ جائے گا
        
        todoList.innerHTML = ''; // پچھلے results کو صاف کریں
        filteredTodos.forEach(todo => {
            const todoItem = createTodoItem(todo);
            todoList.appendChild(todoItem);
        });
    }
}



    

    
    // Create a todo item element
    function createTodoItem(todo) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        
        if (todo.completed) {
            todoItem.classList.add('checked');
        }
        if (todo.id === activeNoteId) {
            todoItem.classList.add('active');
        }
        
        todoItem.innerHTML = `
            <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
            <span class="todo-text">${todo.text}</span>
            ${todo.id === activeNoteId ? `
            <div class="todo-actions">
                <svg class="action-icon edit-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <svg class="action-icon delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </div>
            ` : ''}
        `;
        
        // Add event listeners
        const checkbox = todoItem.querySelector('.checkbox');
        checkbox.addEventListener('change', () => toggleTodo(todo.id));
        
        todoItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('checkbox') && 
                !e.target.classList.contains('action-icon')) {
                setActiveNote(todo.id);
            }
        });
        
        const deleteIcon = todoItem.querySelector('.delete-icon');
        if (deleteIcon) {
            deleteIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
            });
        }
        
        const editIcon = todoItem.querySelector('.edit-icon');
        if (editIcon) {
            editIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                editTodo(todo.id);
            });
        }
        
        return todoItem;
    }
    
    // Filter todos
    function filterTodos(todos, filter) {
        switch(filter) {
            case 'complete':
                return todos.filter(todo => todo.completed);
            case 'incomplete':
                return todos.filter(todo => !todo.completed);
            case 'all':
            default:
                return todos;
        }
    }
    
    // Toggle todo completion
    function toggleTodo(id) {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) return;
        
        const todoBeforeChange = {...todos[todoIndex]};
        
        todos[todoIndex] = {
            ...todos[todoIndex],
            completed: !todos[todoIndex].completed
        };
        
        // Save for undo
        lastAction = 'toggle';
        lastActionData = { id, completed: todoBeforeChange.completed };
        showUndoButton();
        
        renderTodos();
        saveTodos();
    }
    
    // Set active note
    function setActiveNote(id) {
        activeNoteId = id === activeNoteId ? null : id;
        renderTodos();
    }
    
    // Delete todo
    function deleteTodo(id) {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) return;
        
        const deletedTodo = todos[todoIndex];
        
        todos.splice(todoIndex, 1);
        
        // Reset active note if it was deleted
        if (activeNoteId === id) {
            activeNoteId = todos.length > 0 ? todos[0].id : null;
        }
        
        // Save for undo
        lastAction = 'delete';
        lastActionData = deletedTodo;
        showUndoButton();
        
        renderTodos();
        saveTodos();
    }
    
    // Edit todo
    function editTodo(id) {
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return;
        
        newNoteInput.value = todo.text;
        newNoteModal.classList.remove('hidden');
        
        // Focus the input field
        newNoteInput.focus();
        
        // Clear previous event listeners
        const newApplyButton = applyButton.cloneNode(true);
        applyButton.parentNode.replaceChild(newApplyButton, applyButton);
        
        // Update apply button to handle edit
        newApplyButton.onclick = function() {
            const newText = newNoteInput.value.trim();
            if (newText && newText !== todo.text) {
                const oldText = todo.text;
                
                todos = todos.map(t => {
                    if (t.id === id) {
                        return { ...t, text: newText };
                    }
                    return t;
                });
                
                // Save for undo
                lastAction = 'edit';
                lastActionData = { id, text: oldText };
                showUndoButton();
                
                newNoteModal.classList.add('hidden');
                renderTodos();
                saveTodos();
            } else {
                newNoteModal.classList.add('hidden');
            }
        };
    }
    
    // Add new todo
    function addTodo() {
        newNoteInput.value = '';
        newNoteModal.classList.remove('hidden');
        
        // Focus the input field
        newNoteInput.focus();
        
        // Clear previous event listeners
        const newApplyButton = applyButton.cloneNode(true);
        applyButton.parentNode.replaceChild(newApplyButton, applyButton);
        
        // Set apply button to handle add
        newApplyButton.onclick = function() {
            const text = newNoteInput.value.trim();
            if (text) {
                const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
                const newTodo = {
                    id: newId,
                    text: text,
                    completed: false
                };
                
                todos.push(newTodo);
                
                // Save for undo
                lastAction = 'add';
                lastActionData = { id: newId };
                showUndoButton();
                
                activeNoteId = newId;
                newNoteModal.classList.add('hidden');
                renderTodos();
                saveTodos();
            }
        };
    }
    
    
function searchTodos(query) {
    const trimmedQuery = query.trim().toLowerCase();

    // Step 1: اگر کوئی سرچ نہیں کی گئی، تو نارمل رینڈر
    if (!trimmedQuery) {
        renderTodos(); // یہ لسٹ کے تمام آئٹمز دکھائے گا
        return;
    }

    // Step 2: سرچ فلٹر لگائیں
    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(trimmedQuery)
    );

    // Step 3: اگر filteredTodos خالی ہوں
    if (filteredTodos.length === 0) {
        todoList.classList.add('hidden'); // تو todos کی لسٹ چھپے گی
        emptyState.classList.remove('hidden'); // اور empty state دکھے گا
    } else {
        todoList.classList.remove('hidden'); // اگر کچھ نتائج ہیں تو todos دکھائیں
        emptyState.classList.add('hidden'); // empty state چھپ جائے گا
        
        todoList.innerHTML = ''; // پچھلے results کو صاف کریں
        filteredTodos.forEach(todo => {
            const todoItem = createTodoItem(todo);
            todoList.appendChild(todoItem);
        });
    }
}

    
    
    // Set theme
    function setTheme(theme) {
        document.body.className = theme + '-theme';
        themeText.textContent = theme === 'dark' ? 'SMR' : 'SMR';
        localStorage.setItem('theme', theme);
        updateThemeIcon();
    }
    
    // Update theme icon based on current theme
    function updateThemeIcon() {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        themeToggle.innerHTML = currentTheme === 'dark' ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        ` : `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }
    
    // Show undo button
    function showUndoButton() {
        // Clear any existing timeout
        if (undoTimeout) {
            clearTimeout(undoTimeout);
        }
        
        undoContainer.classList.remove('hidden');
        
        // Hide after 5 seconds
        undoTimeout = setTimeout(() => {
            undoContainer.classList.add('hidden');
        }, 9000);
    }
    
    // Undo last action
    function undoLastAction() {
        if (!lastAction || !lastActionData) return;
        
        switch(lastAction) {
            case 'add':
                todos = todos.filter(todo => todo.id !== lastActionData.id);
                // Reset active note if it was the added one
                if (activeNoteId === lastActionData.id) {
                    activeNoteId = todos.length > 0 ? todos[0].id : null;
                }
                break;
                
            case 'delete':
                todos.push(lastActionData);
                todos.sort((a, b) => a.id - b.id);
                break;
                
            case 'edit':
                todos = todos.map(todo => {
                    if (todo.id === lastActionData.id) {
                        return { ...todo, text: lastActionData.text };
                    }
                    return todo;
                });
                break;
                
            case 'toggle':
                todos = todos.map(todo => {
                    if (todo.id === lastActionData.id) {
                        return { ...todo, completed: lastActionData.completed };
                    }
                    return todo;
                });
                break;
        }
        
        undoContainer.classList.add('hidden');
        lastAction = null;
        lastActionData = null;
        
        renderTodos();
        saveTodos();
    }
    
    // Save todos to localStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    // Load todos from localStorage
    function loadTodos() {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            todos = JSON.parse(savedTodos);
            if (todos.length > 0) {
                activeNoteId = todos[0].id;
            }
        }
    }
    
    // Setup event listeners
    function setupEventListeners() {
        addButton.addEventListener('click', addTodo);
        
        cancelButton.addEventListener('click', () => {
            newNoteModal.classList.add('hidden');
        });
        
        searchInput.addEventListener('input', () => {
            searchTodos(searchInput.value);
        });
        
        filterButton.addEventListener('click', () => {
            filterDropdown.classList.toggle('hidden');
        });
        
        filterItems.forEach(item => {
            item.addEventListener('click', function() {
                currentFilter = this.getAttribute('data-filter');
                filterButton.textContent = this.textContent;
                filterDropdown.classList.add('hidden');
                renderTodos();
            });
        });
        
        themeToggle.addEventListener('click', toggleTheme);
        
        undoButton.addEventListener('click', undoLastAction);
        
        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target === newNoteModal) {
                newNoteModal.classList.add('hidden');
            }
            
            if (!e.target.closest('.filter-dropdown') && !e.target.closest('.filter-button')) {
                filterDropdown.classList.add('hidden');
            }
        });
        
        // Handle keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !newNoteModal.classList.contains('hidden')) {
                newNoteModal.classList.add('hidden');
            }
        });
    }




    // Right-click disable
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Keyboard shortcuts disable
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 123) { // F12
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) {
    // Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J
    e.preventDefault();
  }
  if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) {
    // Ctrl+U / Ctrl+S
    e.preventDefault();
  }
});

// Detect if Developer Tools are Open
setInterval(function() {
  if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
    document.body.innerHTML = "<h1 style='color:red; text-align:center;'>Access Denied</h1>";
  }
}, 500);

    
    // Initialize the app
    init();
});
