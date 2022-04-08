/**
 * Stack.js
 * 
 * Description: stack that holds string values
 * 
 * Author: Alvin Tsang
 * Creation Date: March 28, 2022
 */

export default class Stack {
    constructor() {this.arr = [];}

    /*stack methods*/
    push(item) {this.arr.push(item);}

    pop() {return this.arr.pop();}

    peek() {return this.arr.length > 0 ? this.arr[this.arr.length - 1] : null;}

    getSize() {return this.arr.length;}

    isEmpty() {return this.arr.length === 0;}

    deleteAll() {this.arr.length = 0;}
}// end of Stack.js