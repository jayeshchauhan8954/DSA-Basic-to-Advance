// count the number of rotations in a sorted and rotated array

function countRotations(arr, l, r) {
	if (r < l) {
		return 0;
	} else if (l == r) {
		return 1;
	}
	let mid = l + Math.floor((r - l) / 2);
	if (mid < r && arr[mid + 1] < arr[mid]) return mid + 1;
	if (mid > l && arr[mid] < arr[mid - 1]) return mid;
	if (arr[mid] < arr[r]) countRotations(arr, l, mid - 1);
	return countRotations(arr, mid + 1, r);
}

let array = [ 11, 15, 19, 1, 3, 4, 9 ];
let l = 0;
let r = array.length - 1;
console.log(countRotations(array, l, r));
