
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
    let finalAmount = operations.
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

