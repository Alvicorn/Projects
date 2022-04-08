/** 
 * 
 * index.js
 * 
 * Description: Basic calculator application
 * 
 * 
 * Author: Alvin Tsang
 * Creation Date: March 28, 2022
 * 
 **/

"use strict";

import Queue from "./Queue.js";
import { solver } from "./Utilities.js";


/*INITIAL CONDITIONS*/

const eqn = new Queue();

const nums = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"]


// numbers
let zeroButton = document.getElementById("zero");
let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let sevenButton = document.getElementById("seven");
let eightButton = document.getElementById("eight");
let nineButton = document.getElementById("nine");

// operations
let lpButton = document.getElementById("left-parenthesis");
let rpButton = document.getElementById("right-parenthesis");
let backButton = document.getElementById("backspace");
let clearButton = document.getElementById("clear");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let equalButton = document.getElementById("equal");

let displayEl = document.getElementById("display-el");
let display = [];

function updateDisplay(token) {
    
    if(nums.includes(token)) {

        // append digit of a number
        if (!eqn.isEmpty() && !isNaN(eqn.peekBack())) {
            let oldNum = eqn.dequeueBack().toString();
            oldNum += token;
            let newNum = parseFloat(oldNum); 
            eqn.enqueue(newNum);
            console.log(newNum.toFixed(2));

            display.pop();
            display.push(newNum);
        }
        // append first digit of a number
        else {
            let num = parseFloat(token);
            display.push(num);
            eqn.enqueue(num);
            console.log(num.toFixed(2));
        }        

    }
    // append operations
    else {
        eqn.enqueue(token);
        console.log(token);
        display.push(token); 
    }
    let retString = display.join("");
    displayEl.textContent = retString;
}

/*EVENT LISTENER*/

zeroButton.addEventListener("click", e => {
    updateDisplay("0");
})
oneButton.addEventListener("click", e => {
    updateDisplay("1");
})
twoButton.addEventListener("click", e => {
    updateDisplay("2");
})
threeButton.addEventListener("click", e => {
    updateDisplay("3");
})
fourButton.addEventListener("click", e => {
    updateDisplay("4");
})
fiveButton.addEventListener("click", e => {
    updateDisplay("5");
})
sixButton.addEventListener("click", e => {
    updateDisplay("6");
})
sevenButton.addEventListener("click", e => {
    updateDisplay("7");
})
eightButton.addEventListener("click", e => {
    updateDisplay("8");
})
nineButton.addEventListener("click", e => {
    updateDisplay("9");
})

lpButton.addEventListener("click", e => {
    updateDisplay("(");
})
rpButton.addEventListener("click", e => {
    updateDisplay(")");
})
multiplyButton.addEventListener("click", e => {
    updateDisplay("*");
})
divideButton.addEventListener("click", e => {
    updateDisplay("/");
})
plusButton.addEventListener("click", e => {
    updateDisplay("+");
})
minusButton.addEventListener("click", e => {
    updateDisplay("-");
})
backButton.addEventListener("click", e => {
    console.log("back");
    if(display.length > 0) {
        eqn.dequeueBack();
        display.pop();
        let newString = display.join("");
        displayEl.textContent = newString;
    }
})
clearButton.addEventListener("click", e => {
    console.log("clear");
    eqn.deleteAll();
    display.length = 0;
    displayEl.textContent = display;
})
equalButton.addEventListener("click", e => {
    console.log("=");
    eqn.enqueue("?"); // end of line
    let solution = solver(eqn);
    displayEl.textContent = solution;
})







