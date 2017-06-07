// Challenge
//Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it 
//Example if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer. 


function first_factorial(num){
	var factorial = 1;
	for(var i = 1; i <= num; ++i){
		factorial = factorial * i;
	}	
	return factorial;
}

var num_factorial = first_factorial(16);
console.log( num_factorial );

