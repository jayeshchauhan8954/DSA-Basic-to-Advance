function fibonacci(num) {
	let previous = 0,
		current = 1,
		temp;
	const result = [ previous, current ];

	for (let i = 2; i <= num; i++) {
		temp = previous + current;
		previous = current;
		current = temp;
		result.push(current);
	}
	return result;
}
console.log(fibonacci(5));
