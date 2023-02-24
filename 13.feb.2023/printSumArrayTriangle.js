function prinSumArrayTriangle(arr, n) {
	if (n < 1) return;

	let new_array = new Array(n - 1);
	for (let i = 0; i < n - 1; i++) {
		new_array[i] = arr[i] + arr[i + 1];
	}

	prinSumArrayTriangle(new_array, n - 1);

	console.log(arr);
}

//Invoke
let array = [ 1, 2, 3, 4, 5 ];
let num = 5;
prinSumArrayTriangle(array, num);
