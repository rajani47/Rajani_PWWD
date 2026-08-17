/* Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, <name>!" to the console. */

function greetHello(userName)
{
    console.log("Hello ", userName)
} 
greetHello("Rajani")

/* Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns double its value. */

const funArrow = (num1)=> {return num1 * 2}
let num = 15
console.log("Arrow Function output for doubling value of ", num, " is : ", funArrow(num))

/* Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` after 2 seconds. */

function delayMessage()
{
    setTimeout(2000);
    console.log("This message is delayed by 2 seconds ")
}
delayMessage()