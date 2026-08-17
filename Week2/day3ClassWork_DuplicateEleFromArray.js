//Print duplicate elements from an array
let arr = [11, 22,11, 33, 44, 44, 22, 55, 66, 77, 88, 66];
let arr2 = [];
console.log("Array elements are: " + arr);
for(i=0; i<=arr.length-1; i++){
    for(j=i+1; j<=arr.length-1; j++){
        if(arr[i] == arr[j]){
            arr2.push(arr[i]);
        }
    }
}
console.log("Duplicate elements from the array are: " + arr2);
