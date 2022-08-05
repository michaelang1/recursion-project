/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
//method 1: using a default argument to carry the subset array
const subsets = (array, sets = [[]]) => {
	if (array.length === 0) {
		return sets;
	}
	let add = sets.map(el => el.concat(array[0]));
	// has to use spread or concat, push method does not work
	sets = sets.concat(add);
	return subsets(array.slice(1), sets);
};

// method 2: return the subset directly after each recursion
// function subsets(array) {
// 	let length = array.length;

// 	if (length === 0) {
// 		return [[]];
// 	}
// 	let lastSets = subsets(array.slice(0, length - 1));
// 	let currentSets = lastSets.concat(
// 		lastSets.map(el => [...el, array[length - 1]])
// 	);

// 	return currentSets;
// }
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = subsets;
} catch (e) {
	module.exports = null;
}
