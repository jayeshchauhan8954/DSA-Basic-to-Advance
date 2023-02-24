//Function signature, base case, logic at every iteration(recursion)
function binarySearch(arr, x, l, r) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if (arr[mid] === x) return mid;

		if (arr[mid] > x) return binarySearch(arr, x, l, mid - 1);

		return binarySearch(arr, x, mid + 1, r);
	}

	return -1;
}

//Invoke
binarySearch([ 1, 2, 2, 2, 2, 2, 2, 4 ], 2, 0, 8);
