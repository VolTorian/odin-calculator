const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => button.addEventListener("click", inputToDisplay));

let firstNumber;
let secondNumber;
let operator;
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

function operate(num1, num2, op) {
    switch(op) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
            case "divide":
                return divide(num1, num2);
    }
}

function inputToDisplay() {
    textDisplay += this.textContent;
    display.textContent = parseInt(textDisplay);
    // console.log(parseInt(textDisplay));
}
