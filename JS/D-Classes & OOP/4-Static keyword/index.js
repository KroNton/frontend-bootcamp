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
    study() {
        console.log(this.name + " is Studying...");
    }

    static printCount() {
        console.log(`i have ${Student.count} students`)
    }
}

const s1 = new Student("john");
const s2 = new Student("mike");
const s3 = new Student("mikhel");
console.log(`number of created instances: ${Student.count}`)

Student.printCount();