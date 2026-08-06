// Write a script to check whether a given number is positive, negative, or zero.

function checkNumber(num) {
    if (num > 0) {
        console.log(num + " is a positive number.");
    }
    else if (num < 0) {
        console.log(num + " is a negative number.");
    }
    else {
        console.log(num + " is zero.");
    }
}
checkNumber(15);
checkNumber(-7);
checkNumber(0);
