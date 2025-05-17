



// example of Async Func
const add = (a, b) => {
    setTimeout(() => {
        console.log("Hello")
        return a + b
    }, 1000);

}
console.log("World")
const result = add(1, 1);
console.log(result)