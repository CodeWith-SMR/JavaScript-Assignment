/*1. Declare a variable called age & assign to it your age. Show
your age in an alert box.
*/
let myAge = "20";
// alert ("My age is " + myAge);



 /* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */
// Check if the 'visitCount' key exists in localStorage
if (localStorage.getItem("visitCount")) {
  localStorage.setItem("visitCount", Number(localStorage.getItem("visitCount")) + 1);
} else {
  localStorage.setItem("visitCount", 1);
}

let visitCount = localStorage.getItem("visitCount");

console.log("You have visited this site " + visitCount + " times.");



/* 3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser: */
let birthYear = "2005";
console.log("My birth year is " + birthYear);



/* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */
let visitorName = "Muhammad Raza";
let productTitle = "T-shirt";
let quantity = 5;
console.log(` visitor Name is ${visitorName} \n ordered ${quantity} \n Product Title ${productTitle} (s) on XYZ Clothing store.`);



// Added message instructing users to inspect the console for output.
alert(" Please inspect the console (press F12) to view the output, 🔍 \n and don't forget to check the code as well! 💻 \n Thank you for checking my assignment! 😊");