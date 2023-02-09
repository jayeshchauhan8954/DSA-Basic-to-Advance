// for...of and for...in are two looping mechanisms in JavaScript.

// for...of is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It returns the values of the elements in the iterable object, one by one.

// code ---
// const colors = ['red', 'green', 'blue'];

// for (const color of colors) {
//   console.log(color);
// }

// output ---
// red
// green
// blue

// for...in is used to iterate over the properties of an object. It returns the keys of the properties in the object, one by one.

// code ---
// const person = { name: 'John', age: 32, city: 'New York' };

// for (const key in person) {
//   console.log(key, person[key]);
// }

// output ---
// name John
// age 32
// city New York

// NOTE:- In general, you would use for...of when you want to iterate over the values of an iterable object, and for...in when you want to iterate over the keys of an object's properties.
