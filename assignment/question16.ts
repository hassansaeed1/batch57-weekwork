/*16. Multiplication Table
Instructions: Write a program that prints the multiplication table of a given number up to 10*/

function table(number: number) {
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} × ${i} = ${result}`);
    }
}

var givenNumber = 7;
table(givenNumber);


