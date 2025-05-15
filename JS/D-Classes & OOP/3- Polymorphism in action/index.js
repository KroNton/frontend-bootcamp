
// parent class
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    teach() {

    }
    name
    salary
}

// child class
class Professor extends Employee {
    // methods
    teach() {
        console.log(this.name + " is Teaching course...");
    }
}

class TA extends Employee {

    // methods
    teach() {
        console.log(this.name + " is Teaching LAB...");
    }


}

class Student {
    name;

    // Constructor
    constructor(name, age, grade) {
        this.name = name;
    }

    // Methods
    attend(teacher) {
        teacher.teach();
        // console.log(this.name + " is Studying...");
    }

}

const p = new Professor("john", 20000)
const ta = new TA("yousef", 10000)

const s = new Student("mina");

s.attend(ta);
s.attend(p);