function sorts(arr) {
	let sorted = arr.sort((a, b) => a - b);
	return sorted;
}
let array = [ 2, 5, 9, 4, 26, 29, 54, 11, 5, 3 ];
console.log(sorts(array));

// this is sorting of string
let name = 'Jayesh';
// output  = a,e,h,j s,y
let sortedName = name.toLowerCase('').split('').sort().join('');
console.log(sortedName);

// this is sorting function of string
function sortString(str) {
	return str.split('').sort().join('');
}

console.log(sortString('webmaster'));

let toLower = 'LOWER';
let retToLower = toLower.toLowerCase('');
console.log(retToLower);
let toUpper = 'upper';
let retToUpper = toUpper.toUpperCase('');
console.log(retToUpper);
