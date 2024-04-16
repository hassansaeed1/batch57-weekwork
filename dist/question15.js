"use strict";
/*15. Positive, Negative, or Zero
Instructions: Check if a number is positive, negative, or zero.*/
Object.defineProperty(exports, "__esModule", { value: true });
var checkNumber = (num) => {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
};
var numberToCheck = 15;
var result = checkNumber(numberToCheck);
console.log(`The number ${numberToCheck} is ${result}.`);
