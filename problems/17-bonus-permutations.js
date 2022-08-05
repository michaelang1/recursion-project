/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
// method 1: return the result directly at the end of the function
// using last step and current step
function permutations(array) {
	if (array.length === 0) {
		return [[]];
	}
	let length = array.length;
	let lastResult = permutations(array.slice(0, length - 1));
	let currNum = array[length - 1];
	let currResult = [];

	lastResult.forEach(arr => {
		let addBehind = [...arr, currNum];
		currResult.push(addBehind);

		arr.forEach((el, i) => {
			let addFront = [...arr.slice(0, i), currNum, ...arr.slice(i)];
			currResult.push(addFront);
		});
	});

	return currResult;
}

// method 2: carry the final result as a default argument
// function permutations(array, lastResult = [[]]) {
// 	if (array.length === 0) {
// 		return lastResult;
// 	}
// 	let currNum = array[0];
// 	let currResult = [];

// 	lastResult.forEach(arr => {
// 		let addBehind = [...arr, currNum];
// 		currResult.push(addBehind);

// 		arr.forEach((el, i) => {
// 			let addFront = [...arr.slice(0, i), currNum, ...arr.slice(i)];
// 			currResult.push(addFront);
// 		});
// 	});

// 	return permutations(array.slice(1), currResult);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = permutations;
} catch (e) {
	module.exports = null;
}
