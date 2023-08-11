function decimalToBinary(num) {

  let binary ="";


	while(num > 0){
		let rem = num % 2;
		binary += rem;
		num = num / 2;
		
	}
	let res = "";
	for(let i = binary.length-1;i>=0;i--){
		res += binary[i];
	}
	return Number(res);
  //Write you code here
  
}

window.decimalToBinary = decimalToBinary;
