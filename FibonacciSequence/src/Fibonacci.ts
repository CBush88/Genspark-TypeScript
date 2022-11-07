let fib: Function = (n: number, sequence: Array<number> = []) => {
    if(n === 0){
        return 0;
    }else if(n < 3){
        return 1;
    }else if(n in sequence){
        return sequence[n];
    }else {
        let result: number = fib(n - 1, sequence) + fib(n - 2, sequence);
        sequence[n] = result;
        return result;
    }
}

let n: number = 10;
console.log(fib(n));