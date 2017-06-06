// Challenge longest word

// Using the JavaScript language, 
// have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 


function longestWord(sen){
	if( sen.length === 0 || typeof sen !== 'string' ){ console.log("Input cannot be empty or not a string"); }
	
	var sentenceSplit = sen.split(' ');
	var greatestWord = '';

	for(var i = 0; i < sentenceSplit.length; ++i){
		var word = sentenceSplit[i];
		if (word.length > greatestWord.length){
			greatestWord = word;
		}
	}

	return greatestWord;
}

var word_length = longestWord('natalia is not working');
console.log( word_length );
