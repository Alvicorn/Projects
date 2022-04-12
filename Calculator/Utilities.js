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
    let validExpression = true; 

    // empty expression
    if(queue.isEmpty() || queue.peek() == "?")
        finalSolution = "0";
    
    else {
        const numStack = new Stack();
        const opStack = new Stack();

        // console.log(queue);

        while (!queue.isEmpty()|| !opStack.isEmpty()) {
            if(validExpression) {
                // console.log("new token\n");

                let token = queue.dequeueFront();
                // console.log("new token: " + token);
                
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
                        opStack.pop();
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
                    opStack.push(token);
                    
                }
                else {
                    validExpression = false;
                    finalSolution = "Input invalid";
                }
            }

            // console.log(opStack);
            // console.log(numStack);
            // console.log("\n")
        }
        // if (validExpression)
        finalSolution = numStack.pop();
        queue.deleteAll();
        numStack.deleteAll();
        opStack.deleteAll();
    }
    // console.log("evaluated expression is " + finalSolution);
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





