function printSubsequence(arr, index, subsequence) {
	if (index === arr.length) {
		if (subsequence.length > 0) {
			console.log(subsequence);
		}
	} else {
		//Without including the elment
		//subsequence.push(arr[index])
		printSubsequence(arr, index + 1, subsequence);

		//Include the element
		subsequence.push(arr[index]);
		printSubsequence(arr, index + 1, subsequence);

		subsequence.pop();
	}
	return;
}

//Invoke
printSubsequence([ 1, 2, 3 ], 0, []);
