function findLeapYear(year: number){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
}

let year: number = 1900;
console.log(year + (findLeapYear(year)?" is a leap year!" : " is not a leap year!"));

year = 1904;
console.log(year + (findLeapYear(year)?" is a leap year!" : " is not a leap year!"));

year = 2000;
console.log(year + (findLeapYear(year)?" is a leap year!" : " is not a leap year!"));

year = 2001;
console.log(year + (findLeapYear(year)?" is a leap year!" : " is not a leap year!"));