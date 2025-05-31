const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

// Quiz start variables
const QUIZ_TIME_LIMIT = 10; // seconds
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "html";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;

// Dislplay tahe quiz results and hide the quiz container
const showQuizResults = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> question correctly. Great affort!</i>`;
    document.querySelector(".result-message").innerHTML = resultText;  
}

// Clear and reset the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

// Initialize and start the timer for the current question
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if (currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";

            // Disable all options after one option is selected
        answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none"); 
        }
    }, 1000)
}
    // Fetch a random question from based on the selected category
    const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase())?.questions || [];

    // Show the results if all questions have been used
    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResults();
    }

    // Filter out already asked question and choose a random one
    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * categoryQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

    // Highlight the correct answer option and add icon
    const highlightCorrectAnswer = () => {
        const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
        correctOption.classList.add("correct");

        const iconHTML = `<i class="fa-solid fa-circle-check"></i>`;
        correctOption.insertAdjacentHTML("beforeend", iconHTML);
    }

    // Handle the user's answer selection
    const handleAnswer = (option, answerIndex) => {
        clearInterval(timer); // Stop the timer when an answer is selected
        const isCurrent = currentQuestion.correctAnswer === answerIndex;
        option.classList.add(isCurrent ? "correct" : "incorrect");
        !isCurrent ? highlightCorrectAnswer() : correctAnswersCount++;

        // Insert icon based on correctness
        const iconHTML = `<i class="fa-solid ${isCurrent ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>`;
        option.insertAdjacentHTML("beforeend", iconHTML);

        // Disable all options after one option is selected
        answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none"); 

        nextQuestionBtn.style.visibility = "visible";
    }

    // Render the current question and its options in the quiz
    const renderQuestion = () => {
    currentQuestion = getRandomQuestion();

    if (!currentQuestion) return;

    resetTimer();
    startTimer();

    // Update the UI
    answerOptions.innerHTML = ""; // Clear previous options
    nextQuestionBtn.style.visibility = "hidden";
    document.querySelector(".question-next").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`

    // create option <li> alements and append them, and add click event listeners
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    })
}

// start the quiz and render the random question
const startQuiz = () => {
    // Hide the configuration container and show the quiz container
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    // Ubdate the quiz category and number of questions
     quizCategory = configContainer.querySelector(".category-option .active").textContent;
     numberOfQuestions = parseInt(configContainer.querySelector(".question-option .active").textContent);

    // Render the first question
    renderQuestion();
}

// Highlight the slected option on click - category and number of questions
document.querySelectorAll(".category-option, .questions-option").forEach(option => {
  option.addEventListener("click", () => {
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});

// reset the quiz and return to the configuration container
const resetQuiz = () => {
    resetTimer();
    correctAnswersCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);