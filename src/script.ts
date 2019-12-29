import { isNumeric } from './toolkit'

class Calculator {

    private operand = ''
    private operation = ''

    constructor(private readonly screen: HTMLDivElement) { }

    public appendDigit(digit: string) {
        this.screen.innerText += digit
    }

    public appendComma() {
        if (!this.screen.innerText.includes('.')) {
            this.appendDigit('.')
        }
    }

    public applyOperation(operation: string) {
        if (isNumeric(this.screen.innerText)) {
            this.operand = this.screen.innerText
            this.operation = operation
            this.screen.innerText = ''
        }
    }

    public computeOperation() {
        if (this.operand !== '' && this.operation !== '') {
            let res = 0
            switch (this.operation) {
                case '+':
                    res = +this.operand + +this.screen.innerText
                    break
                case 'x':
                    res = +this.operand * +this.screen.innerText
                    break
                case '-':
                    res = +this.operand - +this.screen.innerText
                    break
                case '/':
                    res = +this.operand / +this.screen.innerText
                    break
            }
            this.screen.innerText = res.toString()
        }
    }

    public clearScreen() {
        this.screen.innerText = ''
        this.operand = ''
        this.operation = ''
    }

    public deleteLastDigit() {
        this.screen.innerText = this.screen.innerText.slice(0, -1)
    }

}

function initDigitButtonsEvents(
    calculator: Calculator,
    buttons: NodeListOf<HTMLButtonElement>) {

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            calculator.appendDigit(btn.innerText)
        })
    })
}

function initOperationButtonsEvents(
    calculator: Calculator,
    buttons: NodeListOf<HTMLButtonElement>) {

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            switch (btn.innerText) {
                case 'A/C':
                    calculator.clearScreen()
                    break

                case 'DEL':
                    calculator.deleteLastDigit()
                    break

                case '.':
                    calculator.appendComma()
                    break

                case '+':
                case '-':
                case 'x':
                case '/':
                    calculator.applyOperation(btn.innerText)
                    break

                case '=':
                    calculator.computeOperation()
                    break
            }
        })
    })
}

const scrn = document.querySelector<HTMLDivElement>('.screen')
const digButtons = document.querySelectorAll<HTMLButtonElement>('.btn-digit')
const opeButtons = document.querySelectorAll<HTMLButtonElement>('.btn-operation')

const calc = new Calculator(scrn)
initDigitButtonsEvents(calc, digButtons)
initOperationButtonsEvents(calc, opeButtons)
