import Queue from './Queue.js';
import { solver } from './Utilities.js';



function test(arr) {
    const Q = new Queue();
    
    for(let i = 0; i < arr.length; i++) {
        Q.enqueue(arr[i]);
    }
    let solution = solver(Q);
    return solution.toString();
}


/**test calls */

/*BASIC OPERATIONS TEST */
let arr1 = [1.00, "+", 1.00, "?"];
let arr2 = [7.00, "-", 22.00, "?"];
let arr3 = [15.00, "*", 22.00, "?"];
let arr4 = [22.00, "/", 11.00, "?"];

let arr5 = ["(", 9.00, "-", 7.00, ")", "?"];
let arr6 = ["(", 12.00, "/", 2.00, ")", "+", 3.00, "?"];
let arr7 = [1.00, "-", 2.00, "*", 3.00, "+", 4.00, "?"];
let arr8 = ["(", 25.00,  "-",  16.00, ")",  "*", "(", 8.00, "+", 6.00, ")", "/", 3.00, "?"];


test(arr1) === "2" ? console.log("test1 passed") : console.log("test1 failed");
test(arr2) === "-15" ? console.log("test2 passed") : console.log("test2 failed");
test(arr3) === "330" ? console.log("test3 passed") : console.log("test3 failed");
test(arr4) === "2" ? console.log("test4 passed") : console.log("test4 failed");
test(arr5) === "2" ? console.log("test5 passed") : console.log("test5 failed");
test(arr6) === "9" ? console.log("test6 passed") : console.log("test6 failed");
test(arr7) === "-1" ? console.log("test7 passed") : console.log("test7 failed");
test(arr8) === "42" ? console.log("test8 passed") : console.log("test8 failed");

