const arr = [1, 2, 3, 4, 5];

const resultArr = [];


for (let index = 0; index < arr.length; index++) {

    resultArr.push(arr[index] * 2);
}

console.log("for loop result: ");
console.log(resultArr); // [2, 4, 6, 8, 10]

// Using map
let mapResult = arr.map(function (num) {
    return num * 2;
}

);
console.log("map func result: ");
console.log(mapResult);
// [2, 4, 6, 8, 10]