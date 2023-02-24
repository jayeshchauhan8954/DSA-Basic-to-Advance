function kethSmallerEl(arr, k) {
	arr.sort((a, b) => a - b);
	return arr[k - 1];
}
let array = [ 12, 343, 64, 64, 6, 776, 454, 75 ];
let k = 5;
console.log(kethSmallerEl(array, k));
