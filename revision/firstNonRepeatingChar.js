function firstNonRepeatingCharacter(str) {
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (str.indexOf(char) === str.lastIndexOf(char)) {
			return char;
		}
	}
	return null;
}
let str = 'vikaskashyap';
let result = firstNonRepeatingCharacter(str);
console.log(result); // Output: 'u'
