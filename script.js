let add = document.querySelector('#add');
let sub = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let percentage = document.querySelector('#percentage');
let numbers = document.querySelectorAll('.number');
let equal = document.querySelector('.equal');
let del = document.querySelector('#del');
let reset = document.querySelector('#ac');
let display = document.querySelector('.number-display');
let resultDisplay = document.querySelector('.result-display');

let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

function operate() {
    if (operator === "+") {
        val1 = parseFloat(num1);
        val2 = parseFloat(num2);
        result = val1 + val2;
    } else if (operator === "-") {
        val1 = parseFloat(num1);
        val2 = parseFloat(num2);
        result = val1 - val2;
    } else if (operator === "×") {
        val1 = parseFloat(num1);
        val2 = parseFloat(num2);
        result = val1 * val2;
    } else if (operator === "÷") {
        val1 = parseFloat(num1);
        val2 = parseFloat(num2);
        result = val1 / val2;
    } else if (operator === "%") {
        val1 = parseFloat(num1);
        result = val1 / 100;
    } else {
        result = parseFloat(num1); 
    }
    
    resultDisplay.textContent = result;
    num1 = result.toString(); 
    num2 = "";  
    operator = "";  
}

function resetNumbers() {
    num1 = "";
    num2 = "";
    operator = "";
    result = 0;
}

function setNum1Num2(val) {
    if (operator === "") {
        num1 = num1 + val;  
    } else {
        num2 = num2 + val; 
    }
    display.textContent = `${num1}${operator}${num2}`;    
}

numbers.forEach((number) => addEventListenerOnNumber(number));

function addEventListenerOnNumber(number) {
    number.addEventListener('click', (e) => {
        let val = e.target.value;
        setNum1Num2(val);
    });
}

function operatorEventListener(e) {
    if (num1 && num2 && operator) {
        operate();  
    }

    operator = e.target.value; 
    display.textContent = `${num1}${operator}${num2}`;  
}

add.addEventListener('click', operatorEventListener);
sub.addEventListener('click', operatorEventListener);
multiply.addEventListener('click', operatorEventListener);
divide.addEventListener('click', operatorEventListener);
percentage.addEventListener('click', operatorEventListener);
equal.addEventListener('click', () => {
    if (num2 !== ""){
        operate();
        display.textContent = "";
    }
});

reset.addEventListener('click', () => {
    resetNumbers();
    display.textContent = "";
    resultDisplay.textContent = "0";
});

del.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length-1);
    if (num2 !== "") {
        num2 = num1.substring(0, num2.length - 1);
    }
    else if (operator !== "") {
        operator = num1.substring(0, operator.length - 1);
    } else if (num1 !== "") {
        num1 = num1.substring(0, num1.length - 1);
    }
});
