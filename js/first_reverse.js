// Challenge 

// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

function reverse_string(str){
	if(typeof str !== "string" ){ return false; }

	var new_str = '';
	for(var i = str.length - 1; i >= 0; --i){
		new_str += str[i];
	}
	return new_str;
}

var word = reverse_string("hola");
console.log(word);

