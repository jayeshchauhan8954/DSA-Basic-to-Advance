let map = new Map();

map.set(1, 'Jayesh');
map.set(2, 'Jayesh');
map.set('first_name', 'Jitandra');
map.set('last_name', 'Chauhan');

console.log(map.get(1));
console.log(map.keys());
map.set(1, 'Shalini');

console.log('this is for values');
console.log(map.values());

// all methods of Map funtions in javascript
map.clear();
map.delete();
map.entries();
map.forEach();
map.get();
map.has();
map.keys();
map.set();
map.size();
map.values();

// NOTES:-  The Map object in JavaScript is a collection of key/value pairs and provides a lot of useful methods to work with. Here are some of the most commonly used methods with code examples:

// 1. set(key, value) - Adds or updates an element with a specified key and value to the Map object.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// console.log(map);
// // Output: Map { 'name' => 'John Doe', 'age' => 30 }

// 2. get(key) - Returns the value associated with the key, or undefined if the key does not exist in the Map object.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// console.log(map.get('name'));
// // Output: John Doe

// 3. has(key) - Returns a Boolean indicating whether an element with the specified key exists or not.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// console.log(map.has('name'));
// // Output: true

// 4. delete(key) - Removes the element with the specified key from the Map object.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// map.delete('name');
// console.log(map);
// // Output: Map { 'age' => 30 }

// 5. clear() - Removes all elements from the Map object.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// map.clear();
// console.log(map);
// // Output: Map {}

// 6. keys() - Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// for (const key of map.keys()) {
//   console.log(key);
// }
// // Output:
// // name
// // age

// 7. values() - Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
// code ---
// let maping = new Map();
// maping.set('name', 'John Doe');
// maping.set('age', 30);
// for (const value of maping.values()) {
// 	console.log(value);
// }
// // Output:
// // John Doe
// // 30

// 8. entries() - Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// for (const [key, value] of map.entries()) {
//   console.log(`${key}: ${value}`);
// }
// // Output:
// // name: John Doe
// // age: 30

// 9. forEach(callback(value, key, map), thisArg) - Calls a function for each element in the Map object. The function takes 3 arguments: value, key, and map, and thisArg is an optional argument to define the this value inside the callback function.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
// // Output:
// // name: John Doe
// // age: 30

// 10. size - Returns the number of elements in the Map object.
// code ---
// let map = new Map();
// map.set('name', 'John Doe');
// map.set('age', 30);
// console.log(map.size);
// // Output: 2
