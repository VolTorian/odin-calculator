const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => button.addEventListener("click", inputToDisplay));
const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", inputDecimal);
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => button.addEventListener("click", setOperator));
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", reset);
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", operate);

let firstNumber = 0;
let secondNumber = 0;
let operator = "add";
let textDisplay = "0";
let justFinished = false;


function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
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
    display.textContent = parseFloat(textDisplay);
    justFinished = true;
}

function setOperator() {
    operate();
    operator = this.id;
    firstNumber = textDisplay;
    textDisplay = "0";
    justFinished = false;
}

function reset() {
    firstNumber = 0;
    secondNumber = 0;
    textDisplay = "0";
    operator = "add";
    justFinished = false;
    display.textContent = parseInt(textDisplay);
}

function inputToDisplay() {
    if (justFinished) {
        reset();
    }
    if (textDisplay.length > 15) {
        return;
    }
    textDisplay += this.textContent;
    if (!textDisplay.includes(".")) {
        display.textContent = parseInt(textDisplay);
        secondNumber = display.textContent;
    }
    else {
        display.textContent = textDisplay;
        secondNumber = textDisplay;
    }
}

function inputDecimal() {
    if (textDisplay.includes(".")) {
        return;
    }
    textDisplay = parseInt(textDisplay);
    textDisplay += ".";
    display.textContent = textDisplay;
}