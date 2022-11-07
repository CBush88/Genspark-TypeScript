"use strict";
function primeCheck(n) {
    if (n <= 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i < Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let n = 1;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 2;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 6;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 17;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 19;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 23;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 2803;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 5147;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
n = 2799;
console.log(n + ' ' + (primeCheck(n) ? ' is prime!' : ' is not prime!'));
//# sourceMappingURL=primeCheck.js.map