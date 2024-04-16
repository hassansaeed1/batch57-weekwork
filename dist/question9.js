"use strict";
/*9. Even or Odd
Instructions: Write a program to check if a number is even or odd.*/
Object.defineProperty(exports, "__esModule", { value: true });
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
var inputNumber = 42;
var result = checkEvenOrOdd(inputNumber);
console.log(`The number ${inputNumber} is ${result}.`);
