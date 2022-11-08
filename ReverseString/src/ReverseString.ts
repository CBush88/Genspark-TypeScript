function reverseString(s: String): string {
    let t: string = '';
    for(let i: number = s.length - 1; i >= 0; i--){
        t += s.charAt(i);
    }
    return t;
}

let s: string = 'Hello World'
console.log(reverseString(s));