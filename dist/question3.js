"use strict";
/* 3. Swapping Values
Instructions: Swap the values of two variables without using a third variable..*/
Object.defineProperty(exports, "__esModule", { value: true });
let a = 10;
let b = 20;
console.log("Before swapping: a =", a, "b =", b);
[a, b] = [b, a];
console.log("After swapping: a =", a, "b =", b);
