


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

//function operate that takes in an operator and 2 numbers and then calls the 
//one of the above functions on the numbers
function operate (num1, num2) {
    
    return addNum(num1, num2);
}
console.log(operate(3,3))