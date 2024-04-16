"use strict";
/*Grading System
Instructions: Assign a grade based on a numerical score.*/
Object.defineProperty(exports, "__esModule", { value: true });
function findGrade(score) {
    if (score >= 90) {
        console.log("Grade A");
    }
    else if (score >= 80) {
        console.log("Grade B");
    }
    else if (score >= 70) {
        console.log("Grade C");
    }
    else if (score >= 60) {
        console.log("Grade D");
    }
    else if (score >= 50) {
        console.log("Grade F");
    }
}
var studentScores = [90, 80, 55, 85];
for (const score of studentScores) {
    const grade = findGrade(score);
    console.log(`Score: ${score}, Grade: ${grade}`);
}
