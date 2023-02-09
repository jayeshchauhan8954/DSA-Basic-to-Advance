function findSubarrayWithSumZero(arr) {
	let map = new Map();
	let sum = 0;
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];

		if (sum === 0) {
			result.push([ 0, i ]);
		}

		if (map.has(sum)) {
			let index = map.get(sum);
			result.push([ index + 1, i ]);
		} else {
			map.set(sum, i);
		}
	}

	return result;
}

let arr = [ 0, 2, 4, -1, -3, 4, -5, 5 ];
let result = findSubarrayWithSumZero(arr);
console.log(result);
// Output: [[0, 3], [1, 5], [2, 7]]
