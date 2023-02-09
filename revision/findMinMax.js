// find minimum of an array
function findMinMap(arr) {
	let minimum = Math.min(...arr.map((el) => el));
	return minimum;
}
let array = [ 1, 2, 45, 7, 78, 94, 75, 90 ];
console.log(findMinMap(array));

// find maximum of an array
function findMaxMap(arr) {
	let maximum = Math.max(...arr.map((el) => el));
	return maximum;
}
let array1 = [ 1, 2, 45, 7, 78, 94, 75, 90 ];
console.log(findMaxMap(array1));

// let findMin from normal for loop

function findMin(arr) {
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= min) {
			min = arr[i];
		}
	}
	return min;
}

let arr1 = [ 1, 23, 4, 567, 78, 56, 34 ];
console.log(findMin(arr1));

// let findMax from normal for loop
function findMax(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			//   console.log(arr[i]);
			max = arr[i];
		}
	}
	return max;
}

let arr2 = [ 1, 23, 4, 567, 78, 56, 34 ];
console.log(findMax(arr2));
