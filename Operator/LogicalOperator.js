// Declare variables
let a = 10;
let b = 20;
let c = 30;

// 1. Logical AND (&&)
// Returns true when both conditions are true
console.log("Logical AND:", a < b && b < c);

// 2. Logical OR (||)
// Returns true when at least one condition is true
console.log("Logical OR:", a > b || b < c);

// 3. Logical NOT (!)
// Reverses true to false and false to true
console.log("Logical NOT:", !(a < b));

// 4. AND with false condition
console.log("AND with false:", a > b && b < c);

// 5. OR with false conditions
console.log("OR with false:", a > b || b > c);

// 6. NOT with true condition
console.log("NOT with true:", !true);

// 7. NOT with false condition
console.log("NOT with false:", !false);

// 8.example
let username = "Nutan";
let password = "Java123";

let loginSuccess = username === "Nutan" && password === "Java123";
console.log("Login successful:", loginSuccess);

// 9. example
let age = 22;
let hasID = true;

let eligible = age >= 18 && hasID;
console.log("Eligible:", eligible);
