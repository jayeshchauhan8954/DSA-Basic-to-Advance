// find minimum of an array
function findMin(arr) {
	let minimum = Math.min(...arr.map((el) => el));
	return minimum;
}
let array = [ 1, 2, 45, 7, 78, 94, 75, 90 ];
console.log(findMin(array));

// find maximum of an array
function findMax(arr) {
	let maximum = Math.max(...arr.map((el) => el));
	return maximum;
}
let array1 = [ 1, 2, 45, 7, 78, 94, 75, 90 ];
console.log(findMax(array1));
