// Question ---
// Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function checkIfPalindrome(str) {
	// check if string is empty or not
	if (str === '') {
		console.log('this is an empty string');
		return false;
	}
	// convert it to lowerCase
	let string = str.toLowerCase('');
	let reversed = string.split('').reverse().join('');
	// check if it is a palindrome
	if (string === reversed) {
		console.log(str + ' is a palindrome.');
	} else {
		console.log(str + ' is not a palindrome.');
	}
}

checkIfPalindrome('maDaM');
