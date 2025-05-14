
// Function (method) Declaration
function myfunction() {
    console.log("Hello World");
}

myfunction(); // Hello World


// Function (method) with parameter
function funcwithparam(name) {
    console.log("Hello " + name);

}
funcwithparam("John"); // Hello John

function funcwithparams(name, age) {
    console.log("Hello " + name + " you are " + age + " years old");

}

//call - (invoke) function with parameters
funcwithparams("John", 30); // Hello John

function getArea(width, height) {
    return width * height;
}

console.log("Area is : " + getArea(5, 10)); // 50

function add() { return 10; }

console.log(add()); // 10