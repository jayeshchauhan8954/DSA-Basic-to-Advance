function groupAnagrams(arr) {
	const anagrams = {};

	for (const word of arr) {
		const sortedWord = word.split('').sort().join('');
		if (sortedWord in anagrams) {
			anagrams[sortedWord].push(word);
		} else {
			anagrams[sortedWord] = [ word ];
		}
	}

	const result = [];
	for (const group of Object.values(anagrams)) {
		result.push(...group);
	}

	return result;
}

const arr = [ 'data', 'atad', 'number', 'tada', 'adat', 'bernum' ];
console.log(groupAnagrams(arr));
