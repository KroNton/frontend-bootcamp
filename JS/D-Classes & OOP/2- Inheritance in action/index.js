
// parent class
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    name
    salary
}

// child class
class Professor extends Employee {
    // methods
    teachCourse() {
        console.log(this.name + " is Teaching course...");
    }
}

class TA extends Employee {

    // methods
    assistProfessor() {
        console.log(this.name + " is Assisting professor...");
    }
}

class Student {
    name;
    age;
    grade;

    // Constructor
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // Methods
    study() {
        console.log(this.name + " is Studying...");
    }
}

const p = new Professor("john", 20000)
const Ta = new TA("yousef", 10000)

p.teachCourse();
Ta.assistProfessor();