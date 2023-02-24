// find minimum of an array
function findMinMap(arr) {
	let minimum = Math.min(...arr.map((el) => el));
	return minimum;
}
let array = [ 1, 2, 45, 7, 78, 94, 75, 90 ];
console.log(findMinMap(array));

// find maximum of an array
function findMaxMap(arr) {
	let maximum = Math.max(...arr.map((el) => el));
	return maximum;
}
let array1 = [ 1, 2, 45, 7, 78, 94, 75, 90 ];
console.log(findMaxMap(array1));

// let findMin from normal for loop

function findMin(arr) {
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= min) {
			min = arr[i];
		}
	}
	return min;
}

let arr1 = [ 1, 23, 4, 567, 78, 56, 34 ];
console.log(findMin(arr1));

// let findMax from normal for loop
function findMax(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			//   console.log(arr[i]);
			max = arr[i];
		}
	}
	return max;
}

let arr2 = [ 1, 23, 4, 567, 78, 56, 34 ];
console.log(findMax(arr2));

// find min and max combined ==== mine
class Solution {
	getMinMax(arr, n) {
		//code here
		let min = arr[0];
		let max = 0;
		for (let i = 0; i < n; i++) {
			if (min > arr[i]) {
				min = arr[i];
			}
			if (max < arr[i]) {
				max = arr[i];
			}
		}
		return [ min, max ];
	}
}

// this is from c++
// #include <iostream>

// using namespace std;

// // function for min element of array

// int getMin(int num[], int size)
// {
//     int min = INT32_MAX;
//     for (int i = 0; i < min; i++)
//     {
//         if (num[i] < min)
//         {
//             min = num[i];
//         }
//     }

//     return min;
// }

// function for max element of array

// int getMax(int num[], int size)
// {

//     int maxNum = INT32_MIN;

//     for (int i = 0; i < size; i++)
//     {
//         maxNum = max(maxNum, num[i]);

//         // if (num[i] > max)
//         // {
//         //     max = num[i];
//         // }
//     }

//     return maxNum;
// }

// int main()
// {

//     // declare size
//     int size;
//     cin >> size;

//     // declare array
//     int arr[100];

//     for (int i = 0; i < size; i++)
//     {
//         cin >> arr[i];
//     }

//     // size of array (not a good way)
//     int sizeOfArray = sizeof(arr) / sizeof(int);

//     cout << "size of array" << sizeOfArray << endl;

//     cout << "Maximum value is " << getMax(arr, size) << endl;
//     cout << "Minimum  value is " << getMin(arr, size) << endl;
// }
