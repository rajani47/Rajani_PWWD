/* Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25 */


function printOddNumber(){
 console.log('All Odd Numbers between 1 to 25 are : ');
    for (var i = 1; i <= 25; i++) {    
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}
   
printOddNumber();
