let arr = [11, 22,11, 33, 44, 44, 22, 55, 22, 77, 88, 66];
let num = 22;
let count = 0;
console.log("Array elements are: " + arr);
for(i=0; i<=arr.length-1; i++){
        if(arr[i] == num)
            count++;
    }
console.log("Number  " + num +" present " + count + " times in the array");
