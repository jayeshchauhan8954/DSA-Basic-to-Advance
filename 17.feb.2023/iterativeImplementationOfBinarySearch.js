//Iterative approach for binary search
function binarySearch(arr, x) {
	let l = 0;
	let r = arr.length - 1;
	let mid;

	while (r >= l) {
		mid = l + Math.floor((r - l) / 2);

		if (arr[mid] === x) return mid;

		if (arr[mid] > x) r = mid - 1;
		else l = mid + 1;
	}

	return -1;
}

//Invoke
binarySearch([ -5, -1, 2, 3, 7, 8, 10, 27 ], -1);
