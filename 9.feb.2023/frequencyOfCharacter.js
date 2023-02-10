function freqencyOfChar(str, char) {
	let charArray = str.split('');
	let response = charArray.filter((el) => el === char).length;
	return response;
}
console.log(freqencyOfChar('elephant', 'e'));
