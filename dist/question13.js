"use strict";
/*Leap Year Checker
Instructions: Check if a given year is a leap year*/
Object.defineProperty(exports, "__esModule", { value: true });
var isLeap = (year) => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};
