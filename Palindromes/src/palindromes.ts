function palindromeString(s: String) : boolean {
    let lastIndex: number = s.length - 1;
    for(let i: number = 0; i < s.length/2; i++){
        if(s.charAt(i) !== s.charAt(lastIndex - i)){
            return false;
        }
    }
    return true;
}

function palindromeNumber(n: number) : boolean {
    let temp: number = n;
    let reverse: number = 0;
    while(temp !== 0){
        reverse = (reverse * 10) + temp % 10;
        temp = Math.floor(temp/10);
    }
    return (reverse === n);
}

let s: String = 'racecar';
let t: String = 'elephant';
console.log('String palindrome ' + s + ' ' + palindromeString(s));
console.log('String palindrome ' + t + ' ' + palindromeString(t));

let m: number = 1234567;
let n: number = 1122332211;
console.log('Number palindrome ' + m + ' ' + palindromeNumber(1234567));
console.log('Number palindrome ' + n + ' ' + palindromeNumber(1122332211));