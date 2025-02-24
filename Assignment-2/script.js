/* Exercise 1: Check if a Number is Positive, Negative, or Zero
Write a JavaScript program that takes a number as input and checks whether it is positive, negative, or zero. */
let number = prompt ("Enter a Number");

if (number > 0) {
  console.log("✅ The number is Positive.");
}else if (number < 0) {
  console.log("❌ The number is Negative.");
}else {
  console.log("0️⃣ The number is Zero");
}



/* Exercise 2: Check Even or Odd
Write a JavaScript program that takes a number and checks if it is even or odd. */
let num = prompt ("Enter a Number");

if (num % 2 === 0) {
  console.log("✅ The number is Even.");
} else {
  console.log("❌ The number is Odd.");
}


/* Exercise 3: Check Voting Eligibility
Write a JavaScript program that asks for a user's age and determines if they are eligible to vote (age should be 18 or above). */
let votingEligibility = prompt ("Enter Your Age");

if (votingEligibility >= 18) {
  console.log("✅ You are eligible to vote.");
} else {
  console.log("❌ You are not eligible to vote.");
}



/* Exercise 4: Find the Largest of Two Numbers
Write a JavaScript program to find the largest of two numbers given by the user. */
let number1 = prompt ("Enter a First Number");
let number2 = prompt ("Enter a second Number");

if (number1 > number2) {
  console.log("✅ The first number is greater than the second number.");
} else if (number1 = number2) {
  console.log("✅ The first number is equal to the second number.");
} else {
  console.log("❌ The first number is not greater than the second number.");
}



/* Exercise 5: Check If a Person is Eligible for a Discount
A store gives a discount if:
The person is either a senior citizen (age 60 or above) or
The person has a membership card.
Write a JavaScript program that checks if a person is eligible for a discount. */
let discount = prompt ("Enter your age or membership card.");

if (discount >= 18 || discount === "Member Ship".toLowerCase() || discount === "Member Ship".toUpperCase()) {
  console.log("🎉 You are eligible to Discount.");
} else {
  console.log("❌ You are not eligible to Discount.");
}



/* Exercise 6: Login System with Username and Password
Write a JavaScript program that checks if the username is "admin" and the password is "12345". If both match, display "Login successful", otherwise "Invalid credentials". */
let userName = prompt ("Enter your Name login");
let password = prompt ("Enter your Password login");

if ((userName.toLocaleLowerCase() || userName.toLocaleUpperCase === "muhammad raza") && (password === "12345")) {
  console.log("✅ You are successfully logged in.");
} else {
  console.log("❌ Your username or password is incorrect.");
}



/* Exercise 7: Grade System
Write a JavaScript program that takes a student's marks and assigns a grade based on the following criteria:
90 and above → A
80 to 89 → B
70 to 79 → C
60 to 69 → D
Below 60 → F */
let marks = prompt ("Enter your marks");

if (marks >= 90) {
  console.log("✅ Your grade is A.");
} else if (marks >= 80 && marks < 90) {
  console.log("✅ Your grade is B.");
} else if (marks >= 70 && marks < 80) {
console.log("✅ Your grade is C.");
} else if (marks >= 60 && marks < 70) {
console.log("✅ Your grade is D.");
} else if (marks >= 50 && marks < 60) {
console.log("✅ Your grade is E.");
}else if (marks < 50) {
  console.log("😢 I'm sorry, you have failed. ❌");
} else {
  console.log("❌ Your marks are not valid.");
}



/* Exercise 8: Traffic Light System
Write a JavaScript program that takes a traffic light color as input ("red", "yellow", or "green") and prints the appropriate action:
"red" → "Stop"
"yellow" → "Slow down"
"green" → "Go" */
let trafficLight = prompt ("Enter the color of the traffic light");

trafficLight = trafficLight.toLowerCase();

if (trafficLight === "green") {
  console.log("✅ Go");
} else if (trafficLight === "yellow") {
  console.log("⚠️ Slow down");
} else if (trafficLight ===  "red") {
  console.log("❌ Stop");
} else {
  console.log("❌ The color is not valid.");
}