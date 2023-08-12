function decimalToBinary(num) {

    let rem = 0;
    let sum = "";

    while (num > 0) {
        rem = num % 2;
        sum = rem + sum; // Corrected line
        num = Math.floor(num / 2);
    }

    return sum;
	  //Write you code here
	  
}

window.decimalToBinary = decimalToBinary;
