/* Max of Three
Instructions: Find the maximum of three numbers.*/

function findMaximum(num1: number, num2: number, num3: number): number {
    let max: number = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    return max;
}

var a: number = 10;
var b: number = 25;
var c: number = 15;
console.log(`The maximum of ${a}, ${b}, and ${c} is: ${findMaximum(a, b, c)}`);
