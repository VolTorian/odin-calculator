const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => button.addEventListener("click", inputToDisplay));
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => button.addEventListener("click", setOperator));
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", reset);
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", operate);

let firstNumber = 0;
let secondNumber = 0;
let operator = null;
let textDisplay = "0";

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate() {
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    switch(operator) {
        case "add":
            textDisplay = add(firstNumber, secondNumber);
            break;
        case "subtract":
            textDisplay = subtract(firstNumber, secondNumber);
            break;
        case "multiply":
            textDisplay = multiply(firstNumber, secondNumber);
            break;
        case "divide":
            textDisplay = divide(firstNumber, secondNumber);
            break;
    }
    console.log(textDisplay);
    display.textContent = textDisplay;
    operator = null;
}

function setOperator() {
    console.log(this.id);
    operator = this.id;
    textDisplay = "";
}

function reset() {
    firstNumber = 0;
    secondNumber = 0;
    textDisplay = "0";
    display.textContent = parseInt(textDisplay);
    operator = null;
}

function inputToDisplay() {
    if (textDisplay.length > 15) {
        return;
    }
    textDisplay += this.textContent;
    let parsed = parseInt(textDisplay)
    display.textContent = parsed;
    // console.log(parseInt(textDisplay));
    if (!operator) {
        firstNumber = parsed;
    }
    else {
        secondNumber = parsed;
    }
}
