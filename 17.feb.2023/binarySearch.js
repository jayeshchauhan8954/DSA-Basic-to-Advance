// iterative approach for binary seacrh

function binarySearch(arr, x) {
	let l = 0;
	let r = arr.length - 1;
	let mid;

	while (r >= l) {
		mid = l + Math.floor((r - l) / 2);

		if (arr[mid] === x) {
			return mid;
		} else if (arr[mid] > x) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return -1;
}

// invoke
let array = [ -5, -1, 2, 3, 7, 8, 10, 27 ];
let num = 10;
// console.log(binarySearch(array, num));

// binary search with recursive approach

// function signature, base case , logic at every iteration (recursion)

function binarySearchRec(arr, x, l, r) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if (arr[mid] === x) {
			return mid;
		} else if (arr[mid] > x) {
			return binarySearchRec(arr, x, l, mid - 1);
		} else {
			return binarySearchRec(arr, x, mid + 1, r);
		}
	}
	return -1;
}

// invoke
let arrayRec = [ 1, 2, 3, 5, 7, 6, 8, 9 ];
let numRec = 7;
let lRec = 0;
let rRec = arrayRec.length;
// console.log(binarySearchRec(arrayRec, numRec, lRec, rRec));

// finding the first and last occurance of an element in a sorted array
// first occurance of element
// last occurance of element
function firstOccurance(arr, x, l, r) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if ((mid === 0 || arr[mid - 1] < x) && arr[mid] === x) {
			return mid;
		} else if (arr[mid] > x) {
			return firstOccurance(arr, x, l, mid - 1);
		} else {
			return firstOccurance(arr, x, mid + 1, r);
		}
	}
	return -1;
}

// invoke
let arrayOcc = [ 1, 3, 5, 5, 5, 5, 7, 9, 10 ];
let numOcc = 5;
let lOcc = 0;
let rOcc = arrayOcc.length;
// console.log(firstOccurance(arrayOcc, numOcc, lOcc, rOcc));

function lastOccurance(arr, x, l, r) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if ((mid === arr.length - 1 || arr[mid + 1] > x) && arr[mid] === x) {
			return mid;
		} else if (arr[mid] > x) {
			return lastOccurance(arr, x, l, mid - 1);
		} else {
			return lastOccurance(arr, x, mid + 1, r);
		}
	}
	return -1;
}

console.log(lastOccurance(arrayOcc, numOcc, lOcc, rOcc));
