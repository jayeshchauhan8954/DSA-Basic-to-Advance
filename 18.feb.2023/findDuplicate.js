// find duplicate in array if yes then return true

function checkIfDuplicate(arr, l, r, x) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if (arr[mid] === x && (arr[mid - 1] === x || arr[mid + 1] === x)) {
			return true;
		} else if (x < arr[mid]) {
			return checkIfDuplicate(arr, l, mid - 1, x);
		} else {
			return checkIfDuplicate(arr, mid + 1, r, x);
		}
	}
	return false;
}
let array = [ 0, 2, 3, 5, 5, 7, 9, 11 ];
let num = 5;
let l = 0;
let r = array.length - 1;

// invoke
console.log(checkIfDuplicate(array, l, r, num));

// check if duplicate with iterative approach
// for iterative approach

function checkIfDuplicateIterative(arr, x) {
	let l = 0;
	let r = arr.length - 1;

	while (r >= l) {
		let mid = l + Math.floor((r - l) / 2);
		if (arr[mid] === x && (arr[mid - 1] === x || arr[mid + 1] === x)) {
			return true;
		} else if (x < arr[mid]) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}
	return false;
}

let arrayIterative = [ 0, 2, 3, 4, 4, 5, 7, 9, 11 ];
let numIterative = 3;

console.log(checkIfDuplicateIterative(arrayIterative, numIterative));
