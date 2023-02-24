// for iterative approach

function tenarySearch(arr, x) {
	let l = 0;
	let r = arr.length - 1;

	while (r >= l) {
		let mid1 = l + Math.floor((r - l) / 3);
		let mid2 = r - Math.floor((r - l) / 3);

		if (arr[mid1] === x) {
			return mid1;
		} else if (arr[mid2] === x) {
			return mid2;
		} else if (x < arr[mid1]) {
			r = mid1 - 1;
		} else if (x > arr[mid2]) {
			l = mid2 + 1;
		} else {
			l = mid1 + 1;
			r = mid2 - 1;
		}
	}
	return -1;
}

let array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let num = 6;

console.log(tenarySearch(array, num));

// with recursive approach for tenary seacrh

function tenarySearchRec(arr, l, r, x) {
	if (r >= l) {
		let mid1 = l + Math.floor((r - l) / 3);
		let mid2 = r - Math.floor((r - l) / 3);

		if (arr[mid1] === x) {
			return mid1;
		} else if (arr[mid2] === x) {
			return mid2;
		} else if (x < arr[mid1]) {
			return tenarySearchRec(arr, l, mid1 - 1, x);
		} else if (x > arr[mid2]) {
			return tenarySearchRec(arr, mid2 + 1, r, x);
		} else {
			return tenarySearchRec(arr, mid1 + 1, mid2 - 1, x);
		}
	}
	return -1;
}

// invoke

let arrayRec = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let numRec = 6;
let lRec = 0;
let rRec = arrayRec.length - 1;

console.log(tenarySearchRec(arrayRec, lRec, rRec, numRec));
