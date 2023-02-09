function subArrayWithSum_X(arr, x) {
	let start = 0,
		current_sum = 0;
	for (let i = 0; i < arr.length; i++) {
		current_sum += arr[i];

		while (current_sum > x && start <= i) {
			current_sum -= arr[start];
			start++;
		}
		if (current_sum === x) {
			return [ start, i ];
		}
	}
	return [ -1, -1 ];
}

// Invoke
let array = [ 1, 4, 20, 3, 10, 5 ];
let sum = 33;
console.log(subArrayWithSum_X(array, sum));
