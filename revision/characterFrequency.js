function countChar(str, char) {
	// Convert the string into an array of characters
	let charArray = str.split('');

	// Count the number of occurrences of the given character
	let count = charArray.filter((element) => element === char).length;

	return count;
}

console.log(countChar('unacademymmmmmm', 'm'));
// Output: 2
