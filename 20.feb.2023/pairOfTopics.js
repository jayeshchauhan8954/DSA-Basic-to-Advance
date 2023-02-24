// Pair of topics

function countNumberOfPair(A, B) {
	let n = A.length;
	let D = new Array(n);

	for (let i = 0; i < n; i++) {
		D[i] = A[i] - B[i];
	}

	D.sort((a, b) => a - b);

	let count = 0;

	for (let i = 0; i < n; i++) {
		if (D[i] <= 0) {
			let k = findIndex(D, 0, D.length, -D[i]);
			count = count + (n - k);
		} else {
			// n-i(c) 2
			count = count + (n - i) * (n - i - 1) / 2;
			break;
		}
	}
	return count;
}

function findIndex(arr, l, r, el) {
	while (l < r) {
		let mid = 1 + Math.floor((r - l) / 2);
		if (arr[mid] > el) r = mid;
		else l = mid + 1;
	}
	return l;
}

let arrayA = [ 4, 8, 2, 6, 2 ];
let arrayB = [ 4, 5, 4, 1, 3 ];
console.log(countNumberOfPair(arrayA, arrayB));
