function primeCheck(n: number){
    if(n <= 1){
        return false;
    }else if(n === 2){
        return true;
    }

    if(n % 2 === 0){
        return false;
    }

    for(let i: number = 3; i < Math.sqrt(n); i+=2){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}


let n: number = 1; // not prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 2; // prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 6; // not prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 17; // prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 19 // prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 23 // prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 2803 // prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 5147 // prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));

n = 2799 // not prime
console.log(n + ' ' + (primeCheck(n)?' is prime!' : ' is not prime!'));