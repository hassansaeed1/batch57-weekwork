"use strict";
/* Max of Three
Instructions: Find the maximum of three numbers.*/
Object.defineProperty(exports, "__esModule", { value: true });
function findMaximum(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
var a = 10;
var b = 25;
var c = 15;
console.log(`The maximum of ${a}, ${b}, and ${c} is: ${findMaximum(a, b, c)}`);
