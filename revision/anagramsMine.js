function groupAnagrams(arr) {
	const anagramMap = new Map();
	for (const word of arr) {
		const sortedWord = word.split('').sort().join('');
		if (!anagramMap.has(sortedWord)) {
			anagramMap.set(sortedWord, [ word ]);
		} else {
			anagramMap.get(sortedWord).push(word);
		}
	}
	const result = [];
	for (const anagramGroup of anagramMap.values()) {
		result.push(...anagramGroup);
	}
	return result;
}

const array = [ 'data', 'atad', 'number', 'tada', 'adat', 'bernum' ];
console.log(groupAnagrams(array));
// Output: [ 'data', 'atad', 'tada', 'adat', 'number', 'bernum' ]

// Notes to above code:-
// In this example, the groupAnagrams function creates a Map object called anagramMap to store the anagram groups. For each word in the input array, the function sorts the characters of the word and uses the sorted word as the key in the Map object. If the sorted word is not already a key in the Map, the function creates an array with the word and sets it as the value for the key. If the sorted word is already a key in the Map, the function pushes the word into the existing array of values for that key.

// Once all of the words have been processed, the function creates a new array result to store the final result. Then, it loops through the values of the anagramMap and pushes each group of anagrams into the result array. Finally, the function returns the result array.
