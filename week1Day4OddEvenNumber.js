function PrintOddEvenNumbers() {
    console.log('Print All Even numbers : ');
    
    for (var i = 1; i <= 25; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

    console.log('Print All Odd Numbers: ');
    for (var i = 1; i <= 25; i++) {    
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}
PrintOddEvenNumbers();
