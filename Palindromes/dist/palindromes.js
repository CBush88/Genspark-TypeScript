"use strict";
function palindromeString(s) {
    let lastIndex = s.length - 1;
    for (let i = 0; i < s.length / 2; i++) {
        if (s.charAt(i) !== s.charAt(lastIndex - i)) {
            return false;
        }
    }
    return true;
}
function palindromeNumber(n) {
    let temp = n;
    let reverse = 0;
    while (temp !== 0) {
        reverse = (reverse * 10) + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return (reverse === n);
}
let s = 'racecar';
let t = 'elephant';
console.log('String palindrome ' + s + ' ' + palindromeString(s));
console.log('String palindrome ' + t + ' ' + palindromeString(t));
let m = 1234567;
let n = 1122332211;
console.log('Number palindrome ' + m + ' ' + palindromeNumber(1234567));
console.log('Number palindrome ' + n + ' ' + palindromeNumber(1122332211));
//# sourceMappingURL=palindromes.js.map