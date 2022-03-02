const container = document.querySelector('.container');
const display = document.querySelector('.sum');
const numberButtons = document.querySelectorAll('.')
const operatorButtons = document.querySelectorAll('.')



const input = '';
const secInput = '';
const operator = '';
const currentOperation = null;
const noResetScreen = false;



window.addEventListener('keydown', setDisplay)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => setDisplay(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)


//assigns input to display text
function input() {
    if (input !== '') {
        input = display.textContent
    }
}
console.log(display.textContent)
//functions for basic math operators
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//rounds result
function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

//function operate that takes in an operator and 2 numbers then calls the 
//one of the above functions on the numbers
function basicOp(operation, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

basicOp()

//number function 
function numInput(num) {
    if(display.textcontent == 0 || noResetScreen)
    clearScreen()
    display.textcontent += num
}

// changes the display passing the event and nunmber through the function. 
// Setting innerHTML to the element I want to appear
function setDisplay(e) {
    if (e.key >= 0 && e.key <= 9) numInput(e.key)
}
// function changeDisplay(e) {
//     display.textContent = e
//     div.innerText = text + '' + e;
// }



// changeDisplay();


//Clear button 
function clearScreen() {
    display.textContent = ''
    noResetScreen = false
}
//deletes one character from the screen
function deleteCharacter() {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1);
}

//equal button 
function total() {
    basicOp()
}
