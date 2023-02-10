// Question ---
// Write a JavaScript function that reverse a number
// Example x = 32243;
// Expected Output : 34223

//  There are different ways to convert number to string :

// String literal -> str = "" + num + "";
// String constructor -> str = String(num);
// toString -> str = num.toString();
// String Literal simple -> str = "" + num;

function reverseAnumber(num) {
	let newNum = num + ''; // we are concating string to our num to convert it into string
	return newNum.split(' ').reverse().join();
}

console.log(reverseAnumber(342230));
