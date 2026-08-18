// Write a script to check whether a given number is positive, negative, or zero.
let number1;

function checkNumber(number1) {
    if (number1 > 0) {
        console.log(number1 + " is a positive number.");
    }
    else if (number1 < 0) {
        console.log(number1 + " is a negative number.");
    }
    else {
        console.log(number1 + " is zero.");
    }
}
checkNumber(15);
checkNumber(-7);
checkNumber(0);
