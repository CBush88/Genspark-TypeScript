"use strict";
function reverseString(s) {
    let t = '';
    for (let i = s.length - 1; i >= 0; i--) {
        t += s.charAt(i);
    }
    return t;
}
let s = 'Hello World';
console.log(reverseString(s));
//# sourceMappingURL=ReverseString.js.map