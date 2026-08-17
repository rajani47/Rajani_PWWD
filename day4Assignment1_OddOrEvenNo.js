/* Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `"Even"` if the number is even.
*/

let number1 = 11;

function isOddOrEven(number1) {
    if (number1 % 2 === 0) {
        console.log("Entered number is : " + number1 + ". It is Even Number");
    } else if (number1 % 2 !== 0) {
        console.log("Entered number is : " + number1 + ". It is Odd Number");
}
}

// Function Calling
isOddOrEven(number1);
