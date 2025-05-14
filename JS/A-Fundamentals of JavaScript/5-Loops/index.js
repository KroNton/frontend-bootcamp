const age = 55;
const salary = 35000;

const MaxLoanAmount = 60000;
let loan = 0;

if (age >= 18 && age <= 60 && salary >= 5000) {

    loan = salary * 3;
    if (loan < MaxLoanAmount) {
        console.log("Congratulations! You are eligible for " + loan + " EGP loan");
    }
    else {
        console.log("Congratulations! You are eligible for " + MaxLoanAmount + " EGP loan");
    }
}
else {
    console.log("Applicant is rejected because they do not meet the minimum requirements.");
}
