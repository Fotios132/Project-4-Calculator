let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function updateDisplay(){

    if(secondNumber !== ""){
        display.value = firstNumber + " " + operator + " " + secondNumber
    }else if(operator !== ""){
        display.value = firstNumber + " " + operator
    }else{
        display.value = firstNumber || "0"
    }

}

function addNum(number){

    if(operator === ""){
        if(firstNumber === "0"){
            firstNumber = number
        }else{
            firstNumber += number
        }

    }else{

        if(secondNumber === "0"){
            secondNumber = number
        }else{
            secondNumber += number
        }
    }
    updateDisplay()

}

function setOp(op){

    if(firstNumber === "") 
        return
    if(secondNumber !== ""){
        calculate()
    }
    operator = op
    updateDisplay()
}


function clearDisplay(){
    firstNumber = ""
    secondNumber = ""
    operator = ""
    display.value = "0"
}


function numDeleter(){
    if(secondNumber !== ""){
        secondNumber = secondNumber.slice(0,-1)
    }else if(operator !== ""){
        operator = ""
    }else{
        firstNumber = firstNumber.slice(0,-1)
    }
    updateDisplay()

}

function calculate(){

    if(firstNumber === "" || secondNumber === "") 
        return

    let result = 0
    let num1 = parseFloat(firstNumber)
    let num2 = parseFloat(secondNumber)

    if(operator === "+"){
        result = num1 + num2
    }else if(operator === "-"){
        result = num1 - num2
    }else if(operator === "*"){
        result = num1 * num2
    }else if(operator === "/"){
        result = num1 / num2
    }

    display.value = result
    firstNumber = result.toString()
    secondNumber = ""
    operator = ""

}