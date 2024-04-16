/*Grading System
Instructions: Assign a grade based on a numerical score.*/

const getGrade = (score: number): string => {
    if (score >= 85) {
        return "A";
    } else if (score >= 80) {
        return "A-";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 65) {
        return "B-";
    } else if (score >= 60) {
        return "C+";
    } else if (score >= 55) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
};

const studentScores = [90, 80, 55, 85];
for (const score of studentScores) {
    const grade = getGrade(score);
    console.log(`Score: ${score}, Grade: ${grade}`);
}
