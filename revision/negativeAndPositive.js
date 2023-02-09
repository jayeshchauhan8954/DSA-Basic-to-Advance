function negAndPos(arr) {
	let arr1 = arr.sort((a, b) => b - a); // space complexity is O(n);
	return arr1;
}
let array = [ -1, 2, 3, -3, 0, 5, 7, -6 ];
console.log(negAndPos(array));
