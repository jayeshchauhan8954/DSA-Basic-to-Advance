function shiftNegToEnd(arr) {
	let left = 0,
		right = arr.length - 1;
	while (left <= right) {
		if (arr[left] <= 0 && arr[right] <= 0) {
			right--;
		} else if (arr[left] <= 0 && arr[right] >= 0) {
			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left++;
			right--;
		} else if (arr[left] >= 0 && arr[right] >= 0) {
			left++;
		} else {
			left++;
			right--;
		}
	}
	return arr;
}

let array = [ 12, 353, 646, -7, -34, 65, -343, -8, 656, 676, 65, 232, 45 ];

console.log(shiftNegToEnd(array));
