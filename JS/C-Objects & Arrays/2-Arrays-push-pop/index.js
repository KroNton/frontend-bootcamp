// Arrays

// An array is a special variable, which can hold more than one value at a time.

let student = {
    name: "John",
    age: 20,
    isActive: true,

}

let myArray = [1, 2, 3, 4, 5]; // array of numbers
let myArray2 = ["John", "Doe", "Jane"]; // array of strings
let myArray3 = [1, "John", true, student]; // array of mixed data types

console.log(myArray);
console.log(myArray2);
console.log(myArray2[0]);
console.log(myArray3);
console.log(myArray3[3].age);

let myArray4 = [1, 2, 4];
let sum = 0;
for (let i = 0; i < myArray4.length; i++) {
    sum += myArray4[i]
}
console.log(sum);


let myArray5 = [1, 2, 3, 4, 5];
myArray5.push(6); // add 6 to the end of the array
myArray5.push(7); // add 6 to the end of the array
console.log(myArray5);
const removed_elem = myArray5.pop(); // remove the last element of the array
console.log(myArray5); // [1, 2, 3, 4, 5, 6]
console.log(removed_elem); // 7