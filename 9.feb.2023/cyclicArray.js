// question
// Cycle rotation is the rotation in which one rotation moves the last element of an array to the first place and shifts the remaining elements to the right.

// Given an array. You need to shift all elements to the right by 1 and finally cyclically rotate whole array. For
// example –
// Input – { 3, 88, 21, 5, 6}
// Output – { 6,3, 88, 21, 5}

// code solution with unshift and pop methods in js
function rotateArray(array) {
	array.unshift(array.pop());
	return array;
}
let input = [ 3, 88, 21, 5, 6 ];
console.log(rotateArray(input));
// output  [6, 3, 88, 21, 5]

// code solution with pointer approach
function rotateArray(array) {
	let last = array.length - 1;
	let temp = array[last];
	for (let i = last; i > 0; i--) {
		array[i] = array[i - 1];
	}
	array[0] = temp;
	return array;
}
let input1 = [ 3, 88, 21, 5, 6 ];

console.log(rotateArray(input1));
// output  [6, 3, 88, 21, 5]

// NOTES:-
// Here's one way to perform the cyclic rotation of an array in JavaScript:
// In this implementation, the pop method is used to remove the last element of the array and return it. The unshift method is then used to add the returned element to the beginning of the array. This results in all elements being shifted one position to the right and the last element becoming the first element, effectively performing a cyclic rotation.

// time and space complexity
// The time complexity of the above code is O(n), where n is the number of elements in the array. This is because the pop and unshift methods each take O(1) time, and the for loop takes O(n) time.

// The space complexity of the above code is O(1), as it does not create any new arrays or data structures, but simply modifies the input array in place. The only additional memory used is a few variables, which are a constant amount and do not depend on the size of the input array.
