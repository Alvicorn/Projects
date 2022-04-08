/**
 * Queue.js
 * 
 * Description: queue that holds string values
 * 
 * Author: Alvin Tsang
 * Creation Date: March 28, 2022
 */

export default class Queue {
    constructor() {this.arr = [];}

    /*stack methods*/
    enqueue(item) {this.arr.push(item);}

    dequeueFront() {return this.arr.shift();}

    dequeueBack() {return this.arr.pop();}

    peek() {return this.arr.length > 0 ? this.arr[0] : null;}

    peekBack() {return this.arr.length > 0 ? this.arr[this.arr.length - 1] : null}

    getSize() {return this.arr.length;}

    isEmpty() {return this.arr.length === 0;}

    deleteAll() {this.arr.length = 0;}
}// end of Queue.js