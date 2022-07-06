/*
    Fibonacci
*/

let n1 = 0;
let n2 = 1;
let next;

function Fibonacci(x) {
    for (let i = 0; i < x; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}
Fibonacci(10);