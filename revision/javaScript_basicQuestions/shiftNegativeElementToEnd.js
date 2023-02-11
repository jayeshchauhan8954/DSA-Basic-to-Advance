// this is the input for all the functions

let array = [ 2, -4, 2, -3, 4, 2, 5, -9 ];

// this is the swap function
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function shiftNegativeElementToEnd(array) {
	array.sort((a, b) => b - a);
	return array;
}
// this the simplest solution of this problem with O(n) time complexity and O(1) space complexity
console.log(shiftNegativeElementToEnd(array));

// one code solution of from while loop

function shiftNegativeElementsToEndWithWhile(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		while (arr[left] >= 0 && left < right) {
			left++;
		}

		while (arr[right] < 0 && left < right) {
			right--;
		}

		if (left < right) {
			// swap elements
			swap(arr, left, right);
		}
	}

	return arr;
}
// this the simplest solution of this problem with O(n) time complexity and O(1) space complexity
console.log(shiftNegativeElementsToEndWithWhile(array));

// best solution from for loop
function shiftNegativeElementsToEndWithForLoop(arr) {
	let j = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			if (i !== j) {
				// swap elements
				swap(arr, i, j);
			}
			j++;
		}
	}

	return arr;
}
// this the simplest solution of this problem with O(n) time complexity and O(1) space complexity
console.log(shiftNegativeElementsToEndWithForLoop(array));
