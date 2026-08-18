/* Write a JavaScript function that evaluates a student's score and returns their grade 
using a switch statement to assess score ranges. */

var score

//Function Definition to calculate grade based on score
function calculateGrade(score) {
    switch(true) {
        case (score >= 70):
            console.log("Score is : " + score + '\t' + " Grade is Disctinction");
            break;
        case (score >= 60 && score < 70):
            console.log("Score is : " + score + '\t' + " Grade is First Class");
            break;
        case (score >= 50 && score < 60):
            console.log("Score is : " + score + '\t' + " Grade is Second Class");
            break;
        case (score >= 40 && score < 45):   
            console.log("Score is : " + score + '\t' + " Grade is Pass Class");
            break;
        default:
            console.log("Score is : " + score + '\t' + " Grade is Fail");       
    }
}

// Function calling
// To print Disctinction
calculateGrade(78);
console.log();

// To print First Class
calculateGrade(63);
console.log();

// To print Second Class
calculateGrade(51);     
console.log();

// To print Pass Class
calculateGrade(42);
console.log();

// To print fail
calculateGrade(38);
