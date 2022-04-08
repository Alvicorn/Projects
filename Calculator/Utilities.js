/** 
 * 
 * Utilities.js
 * 
 * Description: Functions for calculator
 * 
 * 
 * Author: Alvin Tsang
 * Creation Date: March 29, 2022
 * 
 **/

 import Stack from "./Stack.js";
 import Queue from "./Queue.js";


// Description: Evalute the expression from the stack
export function solver(queue) {
    let finalSolution = "";
    // let validExpression = true; 
    // empty expression
    if(queue.isEmpty() || queue.peek() == "?")
        finalSolution = "0";
    
    else {
        const numStack = new Stack();
        const opStack = new Stack();


        while (!queue.isEmpty()|| !opStack.isEmpty()) {
            // if(validExpression) {
                console.log("new token\n");
                console.log(queue.peek());

                let token = queue.dequeueFront();

                if(!isNaN(token)) {
                    numStack.push(token);
                }
                
                else if (token === "(")
                    opStack.push(token);
                
                else if (token === ")") {
                    if(opStack.peek() === "(") {
                        opStack.pop();
                    }
                    else {
                        let num2 = numStack.pop();
                        let num1 = numStack.pop();
                        let op = opStack.pop();
                        let ret = equate(num1, num2, op);
                        numStack.push(ret);
                    }
                }

                else if (token === "+" || token === "-" || token === "?") {
                    
                    if(!opStack.isEmpty()) {
                        if(opStack.peek() === "*" || opStack.peek() === "/" ||
                        opStack.peek() === "+" || opStack.peek() === "-") {
                            while(!opStack.isEmpty() && opStack.peek() !== "("
                                && opStack.peek() !== ")") {                        
                                let num2 = numStack.pop();
                                let num1 = numStack.pop();
                                let op = opStack.pop();
                                let ret = equate(num1, num2, op);
                                numStack.push(ret); 
                            }
                        }
                    }
                    if(token !== "?")
                        opStack.push(token);

                }
                else if (token === "*" || token === "/") {
                    if(!opStack.isEmpty()) {
                        if (opStack.peek() === "*" || opStack.peek() === "/") {
                            let num2 = numStack.pop();
                            let num1 = numStack.pop();
                            let op = opStack.pop();
                            let ret = equate(num1, num2, op);
                            numStack.push(ret); 
                        }
                    }
                    else {
                        opStack.push(token);
                    }
                }
                // else {
                //     validExpression = false;
                //     finalSolution = "Input invalid";
                // }
            // }
            console.log(queue);
            console.log(opStack);
            console.log(numStack);
        }
        // if (validExpression)
        finalSolution = numStack.pop();
        queue.deleteAll();
        numStack.deleteAll();
        opStack.deleteAll();
    }
    console.log("evaluated expression is " + finalSolution);
    return finalSolution.toString();
        
}

// helper function for solver()
function equate(num1, num2, op) {

    let ret;
    switch (op) {
        case "*": 
            ret = num1 * num2;
            break;
        case "/":
            ret = num1 / num2;
            break;
        case "+":
            ret = num1 + num2;
            break;
        case "-":
            ret = num1 - num2;
            break;
    }
    return ret;
}





