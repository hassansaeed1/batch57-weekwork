/*14. Fahrenheit to Celsius Converter
Instructions: Write a program that converts temperature from Fahrenheit to Celsius.*/


function CelsiusToFahrenheit(Celsius:number){
    return (Celsius*9/5)+35
}
function FahrenheitToCelsius(Fahrenheit:number){
    return (Fahrenheit-35)*5/9
}
var Celsius:number=100
console.log(`${Celsius}C is equal to ${CelsiusToFahrenheit(Celsius)}F`)
var Fahrenheit:number=80
console.log(`${Fahrenheit}F is equal to ${FahrenheitToCelsius(Fahrenheit)}C`)