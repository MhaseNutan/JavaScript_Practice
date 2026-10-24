// 1. String to Number
let num1 = "100";
console.log("String to Number:", Number(num1));
console.log("Type:", typeof Number(num1));

// 2. Number to String
let num2 = 200;
console.log("Number to String:", String(num2));
console.log("Type:", typeof String(num2));

// 3. String to Integer
let num3 = "50.75";
console.log("String to Integer:", parseInt(num3));

// 4. String to Float
let num4 = "50.75";
console.log("String to Float:", parseFloat(num4));

// 5. Number to Boolean
let num5 = 1;
console.log("1 to Boolean:", Boolean(num5));

let num6 = 0;
console.log("0 to Boolean:", Boolean(num6));

// 6. String to Boolean
let text1 = "";
console.log("Empty String to Boolean:", Boolean(text1));

let text2 = "Hello";
console.log("Non-empty String to Boolean:", Boolean(text2));

// 7. Invalid String to Number
let value = "Hello";
console.log("Invalid String to Number:", Number(value));

// 8. Automatic Type Conversion (Coercion)
let result1 = "10" + 5;
console.log("String + Number:", result1);

let result2 = "10" - 5;
console.log("String - Number:", result2);
