// Recursion is a programming technique where a function calls itself, either directly or indirectly, to solve a problem. In JavaScript, you can create recursive functions by defining a function that calls itself with different arguments until a base case is reached, which terminates the recursion. Here's an example:

function factorial(n) {
	if (n === 0) {
		// base case
		return 1;
	} else {
		return n * factorial(n - 1); // recursive case
	}
}

console.log(factorial(5));
// In this example, the factorial function calculates the factorial of a number n. If n is 0, the base case is reached, and the function returns 1. Otherwise, the function calls itself with n - 1 as the argument and multiplies the result by n to get the factorial of n.

// Another example of recursion in JavaScript is calculating the Fibonacci sequence:

function fibonacci(n) {
	if (n <= 1) {
		// base case
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
	}
}
console.log(factorial(5));

// In this example, the fibonacci function returns the nth number in the Fibonacci sequence. If n is 0 or 1, the base case is reached, and the function returns n. Otherwise, the function calls itself with n - 1 and n - 2 as arguments and adds the results to get the nth Fibonacci number.

// Recursion can be a powerful tool in programming, but it can also be dangerous if not used correctly. Recursive functions can quickly consume memory if the recursion depth is too high, leading to a stack overflow error. Therefore, it's essential to ensure that the base case is reached eventually to terminate the recursion.

// Notes to recursion:

// Recursion can be useful in a wide range of scenarios where a problem can be broken down into smaller sub-problems that can be solved using the same approach. Here are a few examples of use case scenarios where recursion can be helpful:

// Tree Traversal: Recursive algorithms are commonly used to traverse tree structures such as binary trees, where the algorithm visits each node in the tree in a certain order. The algorithm can be implemented using a recursive function that visits the left and right subtrees of each node.

// Backtracking: Backtracking is a common problem-solving technique that involves exploring all possible solutions to a problem by systematically trying different choices. Recursive algorithms are often used to implement backtracking, where the function tries each possible choice and recursively calls itself to explore the next step.

// Divide and Conquer: The divide and conquer approach involves breaking down a problem into smaller sub-problems that can be solved independently. Recursive algorithms are often used to implement this approach, where the function calls itself to solve each sub-problem and combines the results to solve the original problem.

// Memoization: Memoization is a technique used to optimize recursive algorithms by caching the results of function calls and reusing them instead of recalculating them. This can be particularly useful in recursive algorithms that involve expensive calculations.

// These are just a few examples of use case scenarios where recursion can be helpful. Recursion can be a powerful tool for solving many types of problems, but it's important to use it appropriately and ensure that the base case is reached eventually to terminate the recursion.

// Notes to recursion related to time and space complexity

// Recursion can affect both time and space complexity in different ways, depending on how it is used.

// In terms of time complexity, recursive algorithms can sometimes be more efficient than iterative algorithms, especially when the problem can be naturally divided into smaller sub-problems. For example, some sorting algorithms such as quicksort and mergesort use recursion to break down the sorting process into smaller sub-problems, which can lead to better time complexity than iterative algorithms.

// However, recursive algorithms can also be less efficient than iterative algorithms in some cases, especially when the recursion depth is too high, which can lead to stack overflow errors or excessive function call overhead. In such cases, iterative algorithms may be a better choice.

// In terms of space complexity, recursive algorithms can sometimes be less efficient than iterative algorithms, especially when the recursion depth is too high, which can lead to excessive stack usage and memory consumption. In such cases, iterative algorithms may be a better choice.

// However, recursive algorithms can also be more memory-efficient than iterative algorithms in some cases, especially when the recursive function can reuse the same memory space for multiple function calls or when the function can terminate early if a solution is found. For example, the recursive Fibonacci algorithm only needs to store the last two numbers in the sequence and can reuse the same memory space for each function call, which makes it more memory-efficient than an iterative Fibonacci algorithm.

// In summary, recursion can affect time and space complexity in different ways depending on the specific use case, and it's important to consider both factors when choosing between recursive and iterative algorithms.
