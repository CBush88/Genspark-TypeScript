"use strict";
function fib(n, sequence = []) {
    if (n === 0) {
        return 0;
    }
    else if (n < 3) {
        return 1;
    }
    else if (n in sequence) {
        return sequence[n];
    }
    else {
        let result = fib(n - 1, sequence) + fib(n - 2, sequence);
        sequence[n] = result;
        return result;
    }
}
let n = 10;
console.log(fib(n));
//# sourceMappingURL=Fibonacci.js.map