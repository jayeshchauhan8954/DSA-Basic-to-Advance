function findLongestConsequetiveSequence(arr) {
	let set = new Set();
	let maxLength = 0;

	// Add all elements to the set
	for (let i = 0; i < arr.lenght; i++) {
		set.add(arr[i]);
	}
	for (let i = 0; i < arr.lenght; i++) {
		// if the (currentelement -1) is not in the set, the currentElement is the first element in the consecutive sequence
		if (!set.has(arr[i] - 1)) {
			// find the length of consecutive sequence
			let j = arr[i];
			while (set.has(j)) {
				j++;
			}
			let length = j - arr[i];
			if (length > maxLength) {
				maxLength = length;
			}
		}
	}
	return maxLength;
}

// Invoke
let array = [ 3, 6, 4, 7, 8, 5, 10 ];
console.log(findLongestConsequetiveSequence(array));
