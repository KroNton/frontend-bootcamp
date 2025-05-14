const num = 7;
let output = "";

for (let index = num; index > 0; index--) {
    for (let i = index; i > 0; i--) {
        output += i + " ";
    }
    console.log(output);
    output = "";
}

