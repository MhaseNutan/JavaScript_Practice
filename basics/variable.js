// 1. Variable Declaration using let
let name = "Nutan";
let age = 22;
let city = "Pune";

// 2. Variable Declaration using const
const country = "India";

// 3. Different Data Types
let isStudent = true;
let marks = 85.5;
let course;
let result = null;

// 4. Display Variables
console.log("----- Student Information -----");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Country:", country);

// 5. Display Data Types
console.log("----- Data Types -----");
console.log("Name:", typeof name);
console.log("Age:", typeof age);
console.log("Is Student:", typeof isStudent);
console.log("Marks:", typeof marks);
console.log("Course:", typeof course);
console.log("Result:", typeof result);

// 6. Reassign a let Variable
age = 23;
console.log("Updated Age:", age);

// 7. Using Template Literals
console.log(`My name is ${name} and I live in ${city}.`);
