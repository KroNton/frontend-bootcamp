
// This is a simple calculator web app
const displayInput = document.getElementById('inputValue');

const operators = ['-', '+', '%', '*', '/']
let operations = []
let currentValue = ''

function handleInteraction(value) {
    console.log(value);
    if (operators.includes(value)) {
        // console.log('clicked an operator: ', value);
        handleOperatorsInput(value)

    } else {
        // console.log('clicked a numeric value: ', value);
        handleNumInput(value)

    }
    updateUI()
}
function handleNumInput(value) {
    currentValue += value;
    // console.log(' newvalue: ', currentValue);
}
function handleOperatorsInput(value) {
    if (!currentValue) {
        return
    }

    operations.push(currentValue)
    operations.push(value)
    currentValue = ''

}

function handleEvaluate() {
    if (operations.length === 0) {
        return
    }

    let finalAmount = operations[0]
    let prevOperator = null

    if (!currentValue) {
        operations.pop();

    } else {
        operations.push(currentValue)
        currentValue = ''

    }

    for (let index = 1; index < operations.length; index++) {
        if (index % 2 === 0) {
            // numerical value

            finalAmount = eval(`${finalAmount}${prevOperator}${operations[index]}`)


        } else {
            // operator value
            prevOperator = operations[index]

        }

    }
    operations = []
    currentValue = finalAmount
    updateUI()
}

function handleReset() {
    currentValue = ''
    operations = []
    updateUI()

}

function updateUI() {
    const displayString = operations.join(' ') + ' ' + currentValue
    displayInput.innerText = displayString.trim() ? displayString : '0'

    console.log(operations);
}

