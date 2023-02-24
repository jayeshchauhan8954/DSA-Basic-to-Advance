// function add(num) {
// 	if (num == 100) {
// 		return;
// 	}
// 	return add(num + 1);
// }

// console.log(add(12));

function printNumTo10(num) {
	printNumTo10(num - 1);
	if (num === 0) {
		return 1;
	}
}
console.log(printNumTo10(10));

// this the fibonacci function
// 0 1 1 2 3 5 8
// first fibonacci = 1, second
