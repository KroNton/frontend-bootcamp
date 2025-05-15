class Student {
    name;
    age;
    grade;
    static count = 0;

    // Constructor
    constructor(name) {
        this.name = name;
        // static var count 
        Student.count++;
    }

    // Methods
    printName() {
        console.log(`my name is ${this.name}`);
    }

}

const s1 = new Student("john");
const s2 = new Student("mike");
const s3 = new Student("mikhel");


s1.printName();
s2.printName();
s3.printName();

// using plain JS objects

const john = {
    name: "john",
    printName: function () {
        console.log(`my name is ${this.name}`)
    }
}

const mike = {
    name: "mike",
    printName: function () {
        console.log(`my name is ${this.name}`)
    }
}

console.log("--------------------")

john.printName();
mike.printName();