/* Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5 */

let string = 'Nothing is Impossible'
let strArray = []
let flag = true

strArray = string.split(" ")
console.log("String Array is : ", strArray);
console.log("Length of Array is: ", strArray.length)

// Print last word of an array
let arrayLastString = strArray[strArray.length-1]
console.log("Last String of an Array is : ", arrayLastString);

// Print the length of last word of an array

console.log("Length of ", arrayLastString , " is : ", arrayLastString.length)


/* Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. */

/* Need some time
let string1 = "listen"
let string2 = "silent"

function stringAnagram(str1,str1)
{
    
} */