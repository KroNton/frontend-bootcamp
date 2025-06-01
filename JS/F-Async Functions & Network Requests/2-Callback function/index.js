
// example of Async Func
const add = (a, b, result_cb) => {
    setTimeout(() => {

        result_cb(a, b);
    }, 1000);

}


// create external function that will be called later as a Callback function
function PrintResult_cb(a, b) {
    let result = a + b;
    console.log(result)
}

console.log("Hello")

add(1, 1, PrintResult_cb);

// use arrow function to call directly in one line 

add(1, 6, (a, b) => {
    console.log(a + b)
})
