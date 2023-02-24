// for recursive approach

function checkIfConsecutiveNumsSumIsEqualToX(arr, l, r, x) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if (arr[mid] + arr[mid - 1] === x || arr[mid] + arr[mid + 1] === x) {
			return true;
		} else if (arr[mid] + arr[mid - 1] < x) {
			l = mid - 1;
		} else {
			r = mid + 1;
		}
	}
	return false;
}

let array = [ 0, 2, 3, 5, 6, 7, 9, 11 ];
let sum = 5;
let l = 0;
let r = array.length - 1;

// invoke
// console.log(checkIfConsecutiveNumsSumIsEqualToX(array, l, r, sum));

function checkIfConsecutiveNumsSumIsEqualToXsum(arr, l, r, x) {
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if (arr[mid] + arr[mid - 1] === x || arr[mid] + arr[mid + 1] === x) {
			return true;
		} else if (arr[mid] + arr[mid - 1] < x) {
			return checkIfConsecutiveNumsSumIsEqualToXsum(arr, mid - 1, r, x);
		} else {
			return checkIfConsecutiveNumsSumIsEqualToXsum(arr, l, mid + 1, x);
		}
	}
	return false;
}

let arrayRec = [ 0, 2, 3, 5, 6, 7, 9, 11 ];
let sumRec = 5;
let lRec = 0;
let rRec = array.length - 1;

// invoke
console.log(checkIfConsecutiveNumsSumIsEqualToX(arrayRec, lRec, rRec, sumRec));
