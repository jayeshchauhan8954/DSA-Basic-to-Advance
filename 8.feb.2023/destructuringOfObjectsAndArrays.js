// destructuring of Objects and Arrays

// 1. Destructuring of arrays
// ... => spread operator
// , , => to skip the element

let names = [ 'jayesh', 'jitandra', 'jaswant' ];
// let name1 = names[0];
// console.log(name1);

let [ name1, , name2 ] = names;
console.log(name1, name2);
let [ name3, ...other ] = names;
console.log(other);

// Destructuring of objects

let person = {
	name: 'Jayesh',
	city: 'BulandShahr',
	age: '22',
	hobbies: [ 'software', 'sports', 'philosophy' ],
	greet: function() {
		console.log('Hello');
	}
};

let { name, city, age, hobbies, greet } = person;
console.log(city);

let { nameNew, ...otherkeys } = person;
console.log(otherkeys);

// NOTES

// Object destructuring is a JavaScript expression that allows you to extract properties from an object and assign them to variables. There are several types of object destructuring, including:

// 1. Simple destructuring: This is the most basic form of object destructuring, where you extract properties from an object and assign them to variables with the same name.
// code ----
// const obj = { x: 1, y: 2, z: 3 };
// const { x, y, z } = obj;
// console.log(x, y, z);  // 1, 2, 3

// 2. Aliased destructuring: In this form of destructuring, you can extract properties from an object and assign them to variables with a different name.
// code ----
// const obj = { x: 1, y: 2, z: 3 };
// const { x: a, y: b, z: c } = obj;
// console.log(a, b, c);  // 1, 2, 3

// 3. Default values: You can specify default values for properties that are not present in the object.
// code ---
// const obj = { x: 1, y: 2 };
// const { x, y, z = 3 } = obj;
// console.log(x, y, z);  // 1, 2, 3

// 4. Nested destructuring: You can extract properties from nested objects.
// code ---
// const obj = { x: { y: 1, z: 2 }, w: 3 };
// const { x: { y, z }, w } = obj;
// console.log(y, z, w);  // 1, 2, 3

// 5. Destructuring in function parameters: You can use destructuring in function parameters to easily extract properties from an object passed as an argument.
// code ---
// function print({ x, y, z }) {
//   console.log(x, y, z);
// }
// const obj = { x: 1, y: 2, z: 3 };
// print(obj);  // 1, 2, 3

// Note:- These are the main forms of object destructuring in JavaScript.

// Array destructuring is a JavaScript expression that allows you to extract elements from an array and assign them to variables. There are several types of array destructuring, including:

// 1. Simple destructuring: This is the most basic form of array destructuring, where you extract elements from an array and assign them to variables.
// code ---
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);  // 1, 2, 3

// 2. Default values: You can specify default values for elements that are not present in the array.
// code ---
// const arr = [1, 2];
// const [x, y, z = 3] = arr;
// console.log(x, y, z);  // 1, 2, 3

// 3. Destructuring in function parameters: You can use destructuring in function parameters to easily extract elements from an array passed as an argument.
// code ---
// function print([x, y, z]) {
//   console.log(x, y, z);
// }
// const arr = [1, 2, 3];
// print(arr);  // 1, 2, 3

// 4. Ignoring elements: You can ignore elements by using commas instead of variable names.
// code ---
// const arr = [1, 2, 3, 4, 5];
// const [x, , , y, z] = arr;
// console.log(x, y, z);  // 1, 4, 5

// 5. Spread operator: You can use the spread operator (...) to extract the rest of the elements into a new array.
// code ---
// const arr = [1, 2, 3, 4, 5];
// const [x, y, ...rest] = arr;
// console.log(x, y, rest);  // 1, 2, [3, 4, 5]

// Note : These are the main forms of array destructuring in JavaScript.
