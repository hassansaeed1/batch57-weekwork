/*9. Even or Odd
Instructions: Write a program to check if a number is even or odd.*/


function checkEvenOrOdd(number: number): string {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

var inputNumber: number = 42

var result: string = checkEvenOrOdd(inputNumber);
console.log(`The number ${inputNumber} is ${result}.`);