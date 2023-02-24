//Finding the first and last occurence of an element in a sorted array
//first occurence of element
//last occurence of element

function firstOccurence(arr, l, r, x) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);
		if ((mid === 0 || arr[mid - 1] < x) && arr[mid] === x) return mid;
		else if (arr[mid] < x) return firstOccurence(arr, mid + 1, r, x);
		else return firstOccurence(arr, l, mid - 1, x);
	}

	return -1;
}

function lastOccurence(arr, l, r, x) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);
		if ((mid === arr.length - 1 || arr[mid + 1] > x) && arr[mid] === x) return mid;
		else if (arr[mid] > x) return lastOccurence(arr, l, mid - 1, x);
		else return lastOccurence(arr, mid + 1, r, x);
	}

	return -1;
}

let array = [ -1, 0, 1, 2, 5, 5, 5, 5, 5, 5, 10, 15, 16, 17 ];
lastOccurence(array, 0, array.length - 1, 5);
