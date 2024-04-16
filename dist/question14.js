"use strict";
/*14. Fahrenheit to Celsius Converter
Instructions: Write a program that converts temperature from Fahrenheit to Celsius.*/
Object.defineProperty(exports, "__esModule", { value: true });
function CelsiusToFahrenheit(Celsius) {
    return (Celsius * 9 / 5) + 35;
}
function FahrenheitToCelsius(Fahrenheit) {
    return (Fahrenheit - 35) * 5 / 9;
}
var Celsius = 100;
console.log(`${Celsius}C is equal to ${CelsiusToFahrenheit(Celsius)}F`);
var Fahrenheit = 80;
console.log(`${Fahrenheit}F is equal to ${FahrenheitToCelsius(Fahrenheit)}C`);
