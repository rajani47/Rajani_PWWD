/* Write a JavaScript program to find the total sum of all numbers present in an array. */

let array = [10, 20, 30, 40, 50]
let sum = 0

// to print the sum of an array element
for(i=0; i<array.length; i++){
    sum = sum+ array[i]
}

console.log("Array elements are : ", array);
console.log("Sum of array element is : " + sum);

