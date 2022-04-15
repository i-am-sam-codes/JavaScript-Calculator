const numberBtns = document.querySelectorAll('[data-number]')
const operatorBtns = document.querySelectorAll('[data-operator]')
const equalsBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')
const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')

class Calculator {

    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        
    }

    clear () {
        this.previousOperand = ''
        this.currentOperand = ''
        this.operand = undefined

    }

    delete () {

    }

    appendNum (number) {
        this.currentOperand = number

    }

    updateDisplay () {
        this.currentOperand = this.currentOperand
    }
 
    add(a, b) {
        return a + b
    }

    sub(a, b) {
        return a - b
    }

    div(a, b) {
        if (b == 0) throw new Error('div by 0 not allowed');
        return a / b
    }

    multiply(a, b) {
        return a * b
    }
}

const calculator = new Calculator(previousOperand, currentOperand)

// Button click event
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.textContent)
        calculator.updateDisplay()
    })
})

