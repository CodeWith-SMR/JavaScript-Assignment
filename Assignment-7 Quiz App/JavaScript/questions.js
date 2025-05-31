// Array of questions grouped by category (25 questions each)

const questions = [
 {
  category: "html",
  questions: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Pre Processor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag is used to insert an image?",
      options: ["<img>", "<image>", "<src>", "<pic>"],
      correctAnswer: 0,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<newline>"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<style>", "<script>", "<stylesheet>"],
      correctAnswer: 1,
    },
    {
      question: "How do you create a numbered list in HTML?",
      options: ["<ul>", "<ol>", "<li>", "<dl>"],
      correctAnswer: 1,
    },
    {
      question: "Which tag is used to define a table row in HTML?",
      options: ["<tr>", "<td>", "<table>", "<row>"],
      correctAnswer: 0,
    },
    {
      question: "Which tag is used to make text bold in HTML?",
      options: ["<bold>", "<strong>", "<b>", "<text-bold>"],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of the <head> tag in HTML?",
      options: [
        "To create headers in the body",
        "To define metadata and links",
        "To write content",
        "To define footers"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "font", "style", "styles"],
      correctAnswer: 2,
    },
    {
      question: "What does the <title> tag in HTML do?",
      options: [
        "Adds a heading to the page",
        "Displays the page title in the browser tab",
        "Creates a tooltip",
        "None of the above"
      ],
      correctAnswer: 1,
    },
    {
      question: "Which tag is used to define a form in HTML?",
      options: ["<form>", "<input>", "<submit>", "<button>"],
      correctAnswer: 0,
    },
    {
      question: "Which attribute is used to specify an image source in HTML?",
      options: ["src", "href", "link", "image"],
      correctAnswer: 0,
    },
    {
      question: "Which tag defines the largest heading in HTML?",
      options: ["<heading>", "<h6>", "<h1>", "<head>"],
      correctAnswer: 2,
    },
    {
      question: "Which tag is used to define a list item?",
      options: ["<item>", "<li>", "<list>", "<ul>"],
      correctAnswer: 1,
    },
    {
      question: "What does the 'alt' attribute in <img> tag do?",
      options: [
        "Adds a link to the image",
        "Specifies image size",
        "Provides alternative text if image cannot be displayed",
        "None of the above"
      ],
      correctAnswer: 2,
    },
    {
      question: "Which HTML tag is used to define a table?",
      options: ["<tbl>", "<table>", "<tr>", "<td>"],
      correctAnswer: 1,
    },
    {
      question: "How can you make a checkbox in HTML?",
      options: [
        "<input type='checkbox'>",
        "<check>",
        "<input checkbox>",
        "<checkbox>"
      ],
      correctAnswer: 0,
    },
    {
      question: "Which doctype declaration is correct for HTML5?",
      options: [
        "<!DOCTYPE html>",
        "<!DOCTYPE HTML5>",
        "<doctype html5>",
        "<html5!doctype>"
      ],
      correctAnswer: 0,
    },
    {
      question: "Which tag is used to define a paragraph in HTML?",
      options: ["<p>", "<para>", "<paragraph>", "<text>"],
      correctAnswer: 0,
    },
    {
      question: "Which of these is NOT a semantic HTML element?",
      options: ["<header>", "<footer>", "<div>", "<article>"],
      correctAnswer: 2,
    },
    {
      question: "Which tag is used to create a dropdown in HTML?",
      options: ["<select>", "<dropdown>", "<option>", "<input type='dropdown'>"],
      correctAnswer: 0,
    },
    {
      question: "Which tag is used to embed a video in HTML5?",
      options: ["<video>", "<media>", "<movie>", "<embed>"],
      correctAnswer: 0,
    },
    {
      question: "What is the correct HTML tag for inserting a horizontal line?",
      options: ["<hr>", "<line>", "<horizontal>", "<break>"],
      correctAnswer: 0,
    },
    {
      question: "How do you write a comment in HTML?",
      options: [
        "// This is a comment",
        "# This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->"
      ],
      correctAnswer: 3,
    }
  ]
},

  {
  category: "css",
  questions: [
    {
      question: "Which property is used to change the background color of an element?",
      options: ["color", "background-color", "bg-color", "bg"],
      correctAnswer: 1,
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      correctAnswer: 2,
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      correctAnswer: 1,
    },
    {
      question: "Which property is used to make text bold in CSS?",
      options: ["font-weight", "font-style", "text-weight", "bold"],
      correctAnswer: 0,
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "text-color", "color", "foreground-color"],
      correctAnswer: 2,
    },
    {
      question: "Which property is used to set the spacing between lines of text?",
      options: ["line-spacing", "line-height", "text-spacing", "spacing"],
      correctAnswer: 1,
    },
    {
      question: "Which value of the position property makes an element stay in the same place even when the page is scrolled?",
      options: ["static", "relative", "fixed", "absolute"],
      correctAnswer: 2,
    },
    {
      question: "Which CSS property is used to add shadows to text?",
      options: ["text-shadow", "font-shadow", "shadow-text", "text-outline"],
      correctAnswer: 0,
    },
    {
      question: "Which property is used to center block elements horizontally?",
      options: ["margin: auto", "text-align: center", "align: center", "center: block"],
      correctAnswer: 0,
    },
    {
      question: "What is the default value of the position property?",
      options: ["relative", "absolute", "static", "fixed"],
      correctAnswer: 2,
    },
    {
      question: "Which unit is relative to the font-size of the parent element?",
      options: ["px", "em", "%", "vh"],
      correctAnswer: 1,
    },
    {
      question: "How can you apply a style to all `<p>` elements?",
      options: ["p {}", "#p {}", ".p {}", "p[]"],
      correctAnswer: 0,
    },
    {
      question: "Which symbol is used for class selectors in CSS?",
      options: ["#", ".", ":", "@class"],
      correctAnswer: 1,
    },
    {
      question: "Which symbol is used for ID selectors in CSS?",
      options: ["#", ".", "*", "&"],
      correctAnswer: 0,
    },
    {
      question: "Which property is used to add rounded corners to an element?",
      options: ["corner-radius", "border-radius", "round-corner", "radius"],
      correctAnswer: 1,
    },
    {
      question: "What is the use of the z-index property in CSS?",
      options: ["To change the font size", "To control the stacking order", "To center an element", "To change opacity"],
      correctAnswer: 1,
    },
    {
      question: "Which CSS property is used to control the overflow of content?",
      options: ["overflow", "scroll", "visible", "display"],
      correctAnswer: 0,
    },
    {
      question: "How do you make a list not show bullets?",
      options: ["list-style: none", "text-decoration: none", "display: none", "bullet: none"],
      correctAnswer: 0,
    },
    {
      question: "Which property is used to hide an element without deleting it from the layout?",
      options: ["visibility: hidden", "display: none", "opacity: 0", "hidden: true"],
      correctAnswer: 0,
    },
    {
      question: "Which CSS property makes the text italic?",
      options: ["font-style: italic", "text-decoration: italic", "font-type: italic", "italic: true"],
      correctAnswer: 0,
    },
    {
      question: "What does the 'inherit' value do in CSS?",
      options: ["Overrides all values", "Ignores the property", "Inherits the value from parent", "Sets to default"],
      correctAnswer: 2,
    },
    {
      question: "What is the correct syntax to apply multiple classes to an HTML element?",
      options: ["class='one two'", "class='one, two'", "class='one.two'", "class='one-two'"],
      correctAnswer: 0,
    },
    {
      question: "Which property is used to control the size of a background image?",
      options: ["background-size", "bg-size", "image-size", "background-scale"],
      correctAnswer: 0,
    },
    {
      question: "Which shorthand property sets margin on all sides?",
      options: ["padding", "margin", "border", "spacing"],
      correctAnswer: 1,
    },
    {
      question: "Which property is used to add a border around an element?",
      options: ["outline", "frame", "border", "box"],
      correctAnswer: 2,
    },
  ],
}
,

  {
  category: "javascript",
  questions: [
    {
      question: "What is the correct syntax to print a message in the console?",
      options: ["print('Hello')", "console.print('Hello')", "log('Hello')", "console.log('Hello')"],
      correctAnswer: 3,
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "dim", "string"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["Float", "String", "Char", "Decimal"],
      correctAnswer: 1,
    },
    {
      question: "Which method is used to add an element at the end of an array?",
      options: ["push()", "add()", "insert()", "append()"],
      correctAnswer: 0,
    },
    {
      question: "What is the output of: `3 + 2 + '5'`?",
      options: ["55", "10", "325", "75"],
      correctAnswer: 0,
    },
    {
      question: "Which operator is used to assign a value?",
      options: ["=", "==", "===", ":"],
      correctAnswer: 0,
    },
    {
      question: "Which built-in method returns the length of a string?",
      options: ["getLength()", "length()", "size()", "length"],
      correctAnswer: 3,
    },
    {
      question: "Which of the following is used to define a function?",
      options: ["func", "def", "function", "define"],
      correctAnswer: 2,
    },
    {
      question: "How do you write a single-line comment in JavaScript?",
      options: ["<!-- comment -->", "# comment", "// comment", "/* comment */"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to define a constant?",
      options: ["const", "let", "var", "define"],
      correctAnswer: 0,
    },
    {
      question: "What is the result of `typeof []`?",
      options: ["array", "object", "list", "undefined"],
      correctAnswer: 1,
    },
    {
      question: "Which symbol is used for strict equality?",
      options: ["=", "==", "===", "!=="],
      correctAnswer: 2,
    },
    {
      question: "Which method joins all elements of an array into a string?",
      options: ["concat()", "join()", "combine()", "toString()"],
      correctAnswer: 1,
    },
    {
      question: "How do you declare an arrow function?",
      options: ["function => ()", "() -> {}", "() => {}", "=> function()"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is not a JavaScript loop?",
      options: ["for", "while", "foreach", "loop"],
      correctAnswer: 3,
    },
    {
      question: "Which method removes the last element from an array?",
      options: ["shift()", "pop()", "splice()", "remove()"],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to handle exceptions?",
      options: ["try", "catch", "throw", "All of these"],
      correctAnswer: 3,
    },
    {
      question: "Which symbol is used to access object properties?",
      options: [".", ",", ":", "#"],
      correctAnswer: 0,
    },
    {
      question: "Which function converts a string to an integer?",
      options: ["parseFloat()", "Number()", "parseInt()", "toInt()"],
      correctAnswer: 2,
    },
    {
      question: "How do you write an `if` statement in JavaScript?",
      options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i === 5:"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to import a module in ES6?",
      options: ["require", "include", "import", "use"],
      correctAnswer: 2,
    },
    {
      question: "Which method is used to convert JSON to a JavaScript object?",
      options: ["JSON.toObject()", "JSON.parse()", "parse.JSON()", "parseJSON()"],
      correctAnswer: 1,
    },
    {
      question: "Which value is returned by default when a function has no return statement?",
      options: ["null", "0", "undefined", "false"],
      correctAnswer: 2,
    },
    {
      question: "Which object is the root of the DOM hierarchy?",
      options: ["document", "window", "html", "body"],
      correctAnswer: 1,
    },
    {
      question: "What will `Boolean(0)` return?",
      options: ["true", "false", "undefined", "null"],
      correctAnswer: 1,
    },
  ],
}
,

 {
  category: "typescript",
  questions: [
    {
      question: "Which of the following is a valid TypeScript type annotation?",
      options: ["let age: number = '30';", "let name: string = 30;", "let isActive: boolean = true;", "let data: array = [1, 2, 3];"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to define an interface in TypeScript?",
      options: ["class", "interface", "type", "struct"],
      correctAnswer: 1,
    },
    {
      question: "How do you define a union type in TypeScript?",
      options: ["string || number", "string && number", "string | number", "string + number"],
      correctAnswer: 2,
    },
    {
      question: "What is the correct syntax for defining a tuple in TypeScript?",
      options: ["let x: (string, number);", "let x: [string, number];", "let x: {string, number};", "let x: string-number;"],
      correctAnswer: 1,
    },
    {
      question: "Which TypeScript feature allows you to catch type errors at compile time?",
      options: ["Debugger", "Transpiler", "Static typing", "Dynamic typing"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to create a custom type alias in TypeScript?",
      options: ["type", "interface", "alias", "define"],
      correctAnswer: 0,
    },
    {
      question: "Which one is a correct way to define an enum?",
      options: ["enum Colors { Red, Green, Blue }", "let Colors = enum { Red, Green, Blue }", "Colors = enum { Red, Green, Blue }", "define enum Colors = { Red, Green, Blue }"],
      correctAnswer: 0,
    },
    {
      question: "What will `typeof` return when used on a variable of type number?",
      options: ["'Number'", "'int'", "'number'", "'numeric'"],
      correctAnswer: 2,
    },
    {
      question: "What is the output type of the `any` keyword in TypeScript?",
      options: ["It restricts the type strictly", "It allows any type", "It only allows primitive types", "It enforces strict types at runtime"],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is NOT a valid TypeScript type?",
      options: ["boolean", "number", "float", "string"],
      correctAnswer: 2,
    },
    {
      question: "What does `never` mean in TypeScript?",
      options: ["The function returns null", "The function never returns", "The function always returns a value", "The variable is always undefined"],
      correctAnswer: 1,
    },
    {
      question: "What is type assertion in TypeScript used for?",
      options: ["To cast one type to another", "To remove a type", "To infer type automatically", "To convert string to number"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is used to compile TypeScript to JavaScript?",
      options: ["ts-node", "npm", "tsc", "node-ts"],
      correctAnswer: 2,
    },
    {
      question: "Which symbol is used for optional chaining in TypeScript?",
      options: ["!!", "?.", "??", "->"],
      correctAnswer: 1,
    },
    {
      question: "Which TypeScript feature lets you create reusable components that work with any type?",
      options: ["Union types", "Generics", "Enums", "Interfaces"],
      correctAnswer: 1,
    },
    {
      question: "How do you write a function in TypeScript that returns a string?",
      options: ["function greet(): string {}", "function greet() -> string {}", "string greet() {}", "function greet(): String {}"],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of 'readonly' in TypeScript?",
      options: ["Makes the value mutable", "Enforces inheritance", "Prevents reassignment", "Allows dynamic typing"],
      correctAnswer: 2,
    },
    {
      question: "What is the output of typeof null in JavaScript/TypeScript?",
      options: ["'object'", "'null'", "'undefined'", "'none'"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following allows runtime type checking?",
      options: ["Interfaces", "Enums", "Type Guards", "Type Aliases"],
      correctAnswer: 2,
    },
    {
      question: "Which TypeScript feature provides default values for function parameters?",
      options: ["Rest Parameters", "Optional Parameters", "Default Parameters", "Arrow Functions"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is true about interfaces?",
      options: ["They can extend only one interface", "They can extend multiple interfaces", "They are used only for primitive types", "They are not part of TypeScript"],
      correctAnswer: 1,
    },
    {
      question: "What file extension is typically used for TypeScript files?",
      options: [".js", ".json", ".ts", ".tsx"],
      correctAnswer: 2,
    },
    {
      question: "Which of the following will cause a TypeScript error?",
      options: ["let age: number = 25;", "let name: string = 'John';", "let isStudent: boolean = 'yes';", "let score: any = '95';"],
      correctAnswer: 2,
    },
    {
      question: "How do you enable strict mode in TypeScript?",
      options: ["Set 'strict': true in tsconfig.json", "Use --strict flag during execution", "Enable typeCheck", "Add 'use strict' in the file"],
      correctAnswer: 0,
    },
    {
      question: "What does `unknown` type represent in TypeScript?",
      options: ["It is identical to any", "It’s a type-safe counterpart of any", "It represents a number type", "It represents null"],
      correctAnswer: 1,
    },
  ],
},
];
