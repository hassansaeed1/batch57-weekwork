/*Leap Year Checker
Instructions: Check if a given year is a leap year*/


var isLeap = (year: number): boolean => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

