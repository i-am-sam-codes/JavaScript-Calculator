const container = document.querySelector('.container');
const display = document.querySelector('.sum');
const buttonOne = document.getElementById('one');


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


// changes the display passing the event and nunmber through the function. 
// Setting innerHTML to the element I want to appear
function changeDisplay(event, num) {
    e = event.target;
    e.innerHTML = num;
    let div = document.getElementById('sum');
    let text = div.innerHTML;
    div.innerHTML = text + '' + num;
}

changeDisplay();

//clear action button 
function clear() {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1);
}

//equal button 
function total() {
    basicOp()
}
