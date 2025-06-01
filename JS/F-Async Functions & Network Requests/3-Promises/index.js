
// example of Promise
const add = (a, b) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = a + b;
            resolve(result)
            // reject("network issue")

        }, 1000);


    });

};

const result = add(1, 2).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


