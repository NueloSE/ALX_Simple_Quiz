'use strict'

document.addEventListener('DOMContentLoaded', function() {

function add(number1, number2) {
    return number1 + number2;
}


function subtract(number1, number2) {
   return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

let number1 = 0;
let number2 = 0;

const userInput = (number) => parseFloat(document.getElementById(number).value);

const displayResult = (result) => {
    document.getElementById('calculation-result').textContent = result;
}


document.getElementById('add').addEventListener('click', function(){
    number1 = userInput('number1');
    number2 = userInput('number2');
    
    displayResult((add(number1, number2)));
})

document.getElementById('subtract').addEventListener('click', function() {
    number1 = userInput('number1');
    number2 = userInput('number2');

    displayResult((subtract(number1, number2)));
})
document.getElementById('multiply').addEventListener('click', function() {
    number1 = userInput('number1');
    number2 = userInput('number2');

    displayResult((multiply(number1, number2)));
})
document.getElementById('divide').addEventListener('click', function() {
    number1 = userInput('number1');
    number2 = userInput('number2');

    displayResult((divide(number1, number2)));
})
})
