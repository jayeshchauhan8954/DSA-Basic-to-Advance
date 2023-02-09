// first non repeating character in a string

function firstNonRepeatingCharacter(str) {
	let map = new Map();
	for (let i = 0; i < str.length; i++) {
		if (map.has(str[i])) {
			let count = map.get(str[i]);
			count++;
			map.set(str[i], count);
		} else {
			map.set(str[i], 1);
		}
	}
	// iteration over the array to find the first charcter whose frequency in the map is 1
	for (let i = 0; i < str.length; i++) {
		if (map.has(str[i]) && map.str[i] === 1) {
			return str[i];
		}
	}
}

// invoke
console.log(firstNonRepeatingCharacter('charcter'));
console.log(firstNonRepeatingCharacter(' charcter'));
console.log(firstNonRepeatingCharacter('elephant'));
