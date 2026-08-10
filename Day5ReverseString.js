let str = "Testleaf"
let rev = ""
var length = str.length
console.log("The Length of the String is : " + length);

for(var i = length - 1; i>=0; i--){
    rev = rev + str[i]
}

console.log("Original String is : " + str);
console.log("Reversed String is : " + rev);
