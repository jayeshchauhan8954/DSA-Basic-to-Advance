// this function is to reverse letters
function reverseString(str) {
	let updatedString = '';
	for (let i = str.length - 1; i >= 0; i--) {
		updatedString += str[i];
	}
	return updatedString;
}

console.log(reverseString('jayesh is a good boy'));

// this function is to reverse words
function reverseWords(words) {
	let updatedWords = words.split(' ').reverse(' ').join(' ');
	return updatedWords;
}
console.log(reverseWords('jayesh is a good boy'));
