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
    // console.log("first number: " + firstNumber);
    // console.log(operator);
    // console.log("second number: " + secondNumber);
    console.log(firstNumber + " " + operator + " " + secondNumber);
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
    console.log("op: " + textDisplay);
    display.textContent = parseFloat(textDisplay);
    justFinished = true;
    // operator = null;
}

function setOperator() {
    operate();
    // console.log("clicked: " + this.id);
    operator = this.id;
    // firstNumber = secondNumber;
    firstNumber = textDisplay;
    // console.log(firstNumber);
    // secondNumber = textDisplay;
    textDisplay = "";
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
        // let parsed = parseInt(textDisplay)
        secondNumber = display.textContent;
        // console.log("test " + display.textContent);
    }
    else {
        display.textContent = textDisplay;
        secondNumber = textDisplay;
    }
    console.log("test " + textDisplay);
    // console.log(parseInt(textDisplay));
    // if (!operator) {
    //     firstNumber = parsed;
    // }
    // else {
    //     secondNumber = parsed;
    // }
}

function inputDecimal() {
    if (textDisplay.includes(".")) {
        console.log("already has decimal");
        return;
    }
    textDisplay = parseInt(textDisplay);
    textDisplay += ".";
    display.textContent += ".";
}