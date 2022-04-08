import Queue from './Queue.js';
import { solver } from './Utilities.js';



function test1() {
    const Q = new Queue();
    Q.enqueue(1.00);
    Q.enqueue("+");
    Q.enqueue(1.00);
    Q.enqueue("?");
    console.log(Q);

    let solution = solver(Q);
    console.log("solution: " + solution);
    solution === "2" ? console.log("test 1 pass\n") : console.log("test 1 fail\n");   
}

function test2() {
    const Q = new Queue();
    Q.enqueue(20.00);
    Q.enqueue("-");
    Q.enqueue(5.00);
    Q.enqueue("?");
    console.log(Q);

    let solution = solver(Q);
    console.log("solution: " + solution);
    solution === "15" ? console.log("test 2 pass\n") : console.log("test 2 fail\n");   
}

function test1() {
    const Q = new Queue();
    Q.enqueue(1.00);
    Q.enqueue("+");
    Q.enqueue(1.00);
    Q.enqueue("?");
    console.log(Q);

    let solution = solver(Q);
    console.log("solution: " + solution);
    solution === "2" ? console.log("test 1 pass\n") : console.log("test 1 fail\n");   
}

1 - 2 * 3 + 4




/**test calls */
test1();
test2();

