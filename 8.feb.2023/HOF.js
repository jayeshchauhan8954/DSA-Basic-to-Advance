// Map, filter, reduce : Higher order function;
// HOF => hof are those function which can take fun as an argument

// Map

let arr = [ 2, 3, 4, 5, 6, 7, 8, 9 ];

// if we want to create another arr with double of its items
// let answer = [];
// for (let i = 0; i < arr.length; i++){
//     answer = arr[i] * 2;
// }
// console.log(answer);

// same as above from Map fun
let ans = arr.map((elem) => elem * 2);

// Filter
let array = [ 2, 3, 4, 5, 6, 7, 8, 9 ];
// we want even or odd to filter, just for example

// with for loop
// for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0) {
//        let  filerArr = array[i];
//     }
// }
// console.log(filerArr)

// with filter function
let filteredArray = array.filter((el) => el % 2 != 0);
console.log(filteredArray);

// Reduce
// sum all the elements in the array
let toSum = [ 2, 3, 4, 5, 6, 7, 8, 9 ];

let sumOfElements = toSum.reduce(el, (prev) => el + prev);
console.log(sumOfElements);

// NOTES:-

// Higher-order functions (HOFs) are functions that take other functions as arguments or return a function as a result. They are a key feature of functional programming and provide a powerful way to abstract and reuse code in JavaScript. Here are some common examples of higher-order functions in JavaScript:

// 1. map: The map function takes an array and a function as arguments, applies the function to each element in the array, and returns a new array with the results.
// code ---
// const numbers = [1, 2, 3, 4, 5];
// const double = (x) => x * 2;
// const doubledNumbers = numbers.map(double);
// console.log(doubledNumbers);  // [2, 4, 6, 8, 10]

// 2. filter: The filter function takes an array and a function as arguments, applies the function to each element in the array, and returns a new array with only the elements that pass the test.
// code ---
// const numbers = [1, 2, 3, 4, 5];
// const isEven = (x) => x % 2 === 0;
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);  // [2, 4]

// 3. reduce: The reduce function takes an array, an accumulator function, and an initial value as arguments, and reduces the array to a single value by applying the accumulator function to each element and the accumulated value.
// code ---
// const numbers = [1, 2, 3, 4, 5];
// const sum = (acc, x) => acc + x;
// const total = numbers.reduce(sum, 0);
// console.log(total);  // 15

// 4. compose: The compose function takes multiple functions as arguments and returns a new function that composes them in reverse order.
// code ---
// const compose = (...functions) => (x) =>
//   functions.reduceRight((acc, fn) => fn(acc), x);
// const add = (x, y) => x + y;
// const double = (x) => x * 2;
// const doubleAndAdd = compose(double, add);
// const result = doubleAndAdd(2, 3);
// console.log(result);  // 10

// 5. curry: The curry function takes a function and returns a new function that takes its arguments one at a time.
// code ---
// const curry = (fn) => {
//   const arity = fn.length;
//   return function $curry(...args) {
//     if (args.length < arity) {
//       return $curry.bind(null, ...args);
//     }
//     return fn.call(null, ...args);
//   };
// };
// const add = (x, y) => x + y;
// const curriedAdd = curry(add);
// const addFive = curriedAdd(5);
// const result = addFive(3);
// console.log(result);  // 8

// NOTE:- These are some of the most common higher-order functions in JavaScript. There are many more, and you can also create your own higher-order functions to meet your specific needs.
