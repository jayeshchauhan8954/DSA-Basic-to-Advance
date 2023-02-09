// An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In JavaScript, you can use the sort() method to rearrange the letters of a string and then compare it to another string to see if they are anagrams.

// Example:

let str1 = 'listen';
let str2 = 'silent';

// Sort the strings alphabetically
let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');

// Compare the sorted strings to check if they are anagrams
if (sortedStr1 === sortedStr2) {
	console.log('The strings are anagrams');
} else {
	console.log('The strings are not anagrams');
}

// this the solution with tenrary operator
const anagrams = (arr) => {
	let result = {};

	arr.forEach((word) => {
		const sortedWord = word.split('').sort().join('');
		result[sortedWord] ? result[sortedWord].push(word) : (result[sortedWord] = [ word ]);
	});

	return Object.values(result);
};
