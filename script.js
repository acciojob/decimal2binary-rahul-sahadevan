function decimalToBinary(num) {

    let rem = 0;
	let sum = "";
	
	while(num > 0){
		rem = num % 2;
		sum += rem;
		num = parseInt(num/2);
	}
	let res = (sum.split('').reverse().join(''));
	return Number(res);
	  //Write you code here
	  
}

window.decimalToBinary = decimalToBinary;
