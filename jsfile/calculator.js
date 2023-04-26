class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete(){
        console.log("hello")
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number){
        if(this.currentOperand == undefined){
            this.currentOperand = number
        }
        else{
            if (number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }

    }
    chooseOperation(operation){
        if(this.currentOperand==='')return
        if (this.previousOperand!==''){
            this.compute();
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = '';
    }
    compute(){
        let computation
        let prev = parseFloat(this.previousOperand)
        let current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)){
            return;
        }
        else{
            switch (this.operation){
                case '+':
                    computation = prev + current;
                    break
                case '-':
                    computation = prev - current;
                    break
                case '+':
                    computation = prev + current;
                    break
                case '*':
                    computation = prev * current;
                    break
                case '/':
                    computation = prev / current;
                    break
                default:
                    return;
            }
            this.currentOperand = computation;
            this.operation = '';
            this.previousOperand = ''

        }


    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        if(this.previousOperand == undefined){
            return;
        }
        else{
            if(this.operation != null){
                this.previousOperandTextElement.innerText =
                    `${this.previousOperand} ${this.operation}`
                // this.previousOperandTextElement.innerText = this.previousOperand
            }

        }

    }
}

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.op');
const equalsButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.del');
const allClearButton = document.querySelector('.all-clear');
const previousOperandTextElement = document.querySelector('.prev')
const currentOperandTextElement = document.querySelector('.curr')
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button=>{
    calculator.compute();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', button=>{
    calculator.compute()
    calculator.updateDisplay();

})
allClearButton.addEventListener('click', button=>{
    calculator.clear()
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', button=>{
    calculator.delete()
    calculator.updateDisplay();
})
