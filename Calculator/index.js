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
import { ROOT, MULTIPLY, DIVIDE} from "./Symbols.js";


/*INITIAL CONDITIONS*/

// numbers
var zeroButton = document.getElementById("zero");
var oneButton = document.getElementById("one");
var twoButton = document.getElementById("two");
var threeButton = document.getElementById("three");
var fourButton = document.getElementById("four");
var fiveButton = document.getElementById("five");
var sixButton = document.getElementById("six");
var sevenButton = document.getElementById("seven");
var eightButton = document.getElementById("eight");
var nineButton = document.getElementById("nine");

// operations
var lpButton = document.getElementById("left-parentheses");
var rpButton = document.getElementById("right-parentheses");
var backButton = document.getElementById("delete");
var clearButton = document.getElementById("clear");

var decimalButton = document.getElementById("decimal");
var powerButton = document.getElementById("power");
var sqrtButton = document.getElementById("square-root");

var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");

var ansButton = document.getElementById("answer");
var equalButton = document.getElementById("equal");

var displayEl = document.getElementById("display");
var display = [];
var eqn = new Queue();
const nums = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
var solution = null;

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

decimalButton.addEventListener("click", e => {
    try {
        let update = updateDisplay(".");
        if(!update) {
            throw "decimal error";
        }
    }
    catch(err) {
        console.error(err);
        eqn.deleteAll();
        display.deleteAll();
        display.push(err);
        let newString = display.join("");
        displayEl.textContent = newString;
    }
})
lpButton.addEventListener("click", e => {
    updateDisplay("(");
})
rpButton.addEventListener("click", e => {
    updateDisplay(")");
})
powerButton.addEventListener("click", e => {
    updateDisplay("^");
})
sqrtButton.addEventListener("click", e => {
    updateDisplay(ROOT);
})

multiplyButton.addEventListener("click", e => {
    updateDisplay(MULTIPLY);
})
divideButton.addEventListener("click", e => {
    updateDisplay(DIVIDE);
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
        if(newString.length === 0)  
            newString = "";
        displayEl.textContent = newString;
    }
})
clearButton.addEventListener("click", e => {
    console.log("clear");
    eqn.deleteAll();
    display.length = 0;
    displayEl.textContent = "";
})
equalButton.addEventListener("click", e => {
    console.log("=");
    updateDisplay("?");
    eqn.enqueue("?"); // end of line
    solution = solver(eqn);
    displayEl.textContent = solution;
    eqn.deleteAll();
})

ansButton.addEventListener("click", e => {
    if(solution !== null) {
        console.log(solution);
        // append each digit of the solution
        let len = solution.length;
        for(let i=0; i<len;i++)
            updateDisplay(solution[i]); 
    }
})



function updateDisplay(token) {
    
    let update = true;
    // reset display to empty string
    if(token === "?") {
        display.length = 0;        
    }

    else if(nums.includes(token)) {

        // if token is a decimal point, append "." to act as the flag for
        // when the following numbers will be decimal places 
        if(token === ".") {
            eqn.enqueue(".");
            console.log(token);
            display.push(token); 
        }

        // applying decimal places if the flag "." is in the queue
        else if(eqn.peekBack() === ".") {
            eqn.dequeueBack();
            display.pop();

            // // check if number is already a floating point
            let oldNum = eqn.dequeueBack();
            if (oldNum % 1 !== 0)
                update =  false;
                // throw new UserException("Decimal Error", "decimalError");
            else {
                oldNum = oldNum.toString();
                oldNum += ".";
                oldNum += token;
            
                let newNum = parseFloat(oldNum); 
                eqn.enqueue(newNum);
                console.log(newNum.toFixed(2));

                display.pop();
                display.push(newNum);
            }
        }
        
        // append digit of a number
        else if (!eqn.isEmpty() && !isNaN(eqn.peekBack())) {
            
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
    
    return update;
}
