// built-in functions and properties of string

const post = "i love #javascript";


let check_for_str = post.includes("#javascript"); // true
let check_for_str2 = post.startsWith("#java"); // false
let check_for_str3 = post.endsWith("#javascript"); // true

console.log(post.length);

console.log(check_for_str); // true
console.log(check_for_str2); // false
console.log(check_for_str3); // true

const x = "2"
console.log(x + 2); // 22
console.log(parseInt(x) + 2); // 4
console.log(parseFloat(x) + 2.5); // 4.0

let str = "JavaScript";
console.log(str.substring(0, 4)); // Java

console.log(isNaN("123a")) // true
console.log(parseInt("5.5")) // 5
console.log("123".length) // 3
console.log("Hello".toUpperCase()); // HELLO