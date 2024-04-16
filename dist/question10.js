"use strict";
/*10. Voting Eligibility
Instructions: Check if a person is eligible to vote.*/
Object.defineProperty(exports, "__esModule", { value: true });
let personage = 20;
if (personage >= 18) {
    console.log("eligible for vote");
}
else if (personage <= 18) {
    console.log("not eligible for vote");
}
