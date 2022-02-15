const container = document.querySelector('.container');
const display = document.querySelector('.sum');
const buttonOne = document.getElementById('one');


//functions for basic math operators
function addNum (num1, num2) {
    return num1 + num2;
}


function subtractNum (num1, num2) {
    return num1 - num2;
}

function multiplyNum (num1, num2) {
    return num1 * num2;
}

function divideNum (num1, num2) {
    return num1 / num2;
}

//function operate that takes in an operator and 2 numbers then calls the 
//one of the above functions on the numbers
function operate (operator, firstArg, secondArg) {
    
    switch (operator){
        case '+':
            return addNum(firstArg,secondArg);
            break;
        case '-':
            return subtractNum(firstArg,secondArg);
            break;
        case 'x':
            return multiplyNum(firstArg,secondArg);
            break;
        case '*':
            return multiplyNum(firstArg,secondArg);
            break;
        case '/':
            return divideNum(firstArg,secondArg);
            break;
        }
}
console.log(operate(3,3))



//changes the display passing the event and nunmber through tht efunction. 
//Setting innerHTML ti the element I want to appear
function changeDisplay(event, num) {
    e = event.target;
    e.innerHTML = num;
    let div = document.getElementById('sum');
    let text = div.innerHTML;
    div.innerHTML = text + '' + num;
}

changeDisplay();
