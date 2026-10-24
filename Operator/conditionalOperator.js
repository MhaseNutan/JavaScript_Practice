// 1. Basic conditional operator
let age = 20;

let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log("Voting Status:", result);

// 2. Check even or odd
let number = 7;

let evenOdd = number % 2 === 0 ? "Even Number" : "Odd Number";
console.log("Number:", evenOdd);

// 3. Find the greater number
let a = 25;
let b = 15;

let greater = a > b ? a : b;
console.log("Greater Number:", greater);

// 4. Positive or negative
let num = -5;

let status = num >= 0 ? "Positive or Zero" : "Negative";
console.log("Number Status:", status);

// 5. Nested conditional operator
let marks = 75;

let grade = marks >= 90 ? "A Grade"
          : marks >= 75 ? "B Grade"
          : marks >= 60 ? "C Grade"
          : "Needs Improvement";

console.log("Grade:", grade);
