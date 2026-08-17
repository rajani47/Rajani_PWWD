
/* Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a palindrome, 
then test your function with various strings and print the results. */

//let originalStr = "Testleaf"
let originalStr = "madam"
let reverseStr=""
let length = originalStr.length
flag = false;
//let j = 0

function reverseString(originalStr){
console.log("The Length of the String is : " + length);

for(let i = originalStr.length; i>=0; i--)
{
     // Slice method 
    reverseStr = reverseStr + originalStr.slice(i-1,i)
}
console.log("Original String is : " + originalStr);
console.log("Reversed String is : " + reverseStr);
}

// Function calling
reverseString(originalStr);
// Concatenated original and reverse string using Template Literal
let newString = `${originalStr}${reverseStr}`
console.log("Concatenated New String is " + newString)

// Function definition - to check whether the entered string is palindrom or not
function palindromeString(originalStr, reverseStr){
    if(originalStr === reverseStr)
        return true
    else
        return false
}

// Function calling
let answer = palindromeString(originalStr,reverseStr);
if(answer == true)
    console.log("Entered String is Palindrom");
else
    console.log("Entered String is not Palindrom");

    


