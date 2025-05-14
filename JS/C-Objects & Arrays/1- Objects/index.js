
// Objects are a collection of key-value pairs
// The key is a string and the value can be any data type
// Objects are used to store data in a structured way

// JSON (JavaScript Object Notation) is a lightweight data interchange format
let student = {
    name: "John",
    age: 20,
    isActive: true,
    courses: ["HTML", "CSS", "JavaScript"],
}

console.log(student);

// using dot notation to access object properties
console.log(student.name); // John
console.log(student.age); // 20

// using bracket notation to access object properties
console.log(student["courses"]); // [ 'HTML', 'CSS', 'JavaScript' ]
console.log(student["year"]); // undefined

student.isActive = false; // changing the value of isActive property

if (student.isActive) {
    console.log("Student is active");
}
else {
    console.log("Student is not active");
}