// Map and Set in js

// MAP

// Map is a data structure which holds elements as (key, value) pair, and keys in a map are unique.

// creating map
let m = new Map();

// set key , value
m.set(1, 'jayesh');
m.set(2, 'jaswant');
m.set(3, 'jitandra');
m.set(1, 'Jeevesh'); // this will overwrite the first value.
m.set('name', 'jeevendra singh');
// m.set(name, 'jogindar singh'); we can't use key without quotes just like in object. It looks similar to object but there are some different properties.

console.log(m);

// get the value with key as 3 in the map "m"
console.log(m.get(3));
console.log(m.get('name'));
console.log(m.keys()); // this will give all keys.

m.delete(2);

// check that map has a key
console.log(m.has(3));

// SET

// Set is a data structure that holds unique keys
let s = new Set();

s.add(1);
s.add(2);

s.add(2); // this will overwrite the first one and still have the same as previous but different index

console.log(s);

// to check if set contains a key , we use a function called

console.log(s.has(2));
