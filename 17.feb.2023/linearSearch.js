// linear search
// arr : [3,4,8,1,2,0,-1],x=2 => return 4
// if element doesn't exist return -1

function search(arr, x) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === x) {
			return i;
		}
	}
	return -1;
}

// Invoke
let array = [ 3, 4, 8, 1, 2, 0, -1 ];
let x = 2;
console.log(search(array, x));

// Hash Maps => O(1)

/*
Map m
m.set("jeev","software engineer")
m.set("je3ev","sof2tware engineer")
m.set("j2eev","so2ftware engineer")

{
    memory location : 1 -> {"jeev" , "software engineer"}
    memory location : 137 -> {"jeev" , "software engineer"}
}

*/
