// reverse the array

function reverseArray(arr) {
	let start = 0,
		end = arr.length - 1;
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	return arr;
}
let array = [ 1, 2, 5, 8, 4, 0, 9 ];
console.log(reverseArray(array));
// output should be [9,0,4,8,5,2,1];
