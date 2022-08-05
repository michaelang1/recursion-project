/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
const flatten = array => {
	// base case 1: the input is no longer an array;
	// this stops recursing on the 1st element of the last input array;
	if (!Array.isArray(array)) return [array];
	// return as an array because it will still be spread by "..." on line 3;

	// base case 2: the array length is reduced to 0, this stops splitting the array;
	if (array.length === 0) return [];

	// split the input array into two parts. A. 1st element; B. the rest as an array;
	// ==> recursive case 1, recursive step: peel the "[]" off of the 1st element
	// i.e reducing its dimension;
	// ==> recursive case 2, recursive step: reduce array size -> to reach each 1st element
	return [...flatten(array[0]), ...flatten(array.slice(1))];
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = flatten;
} catch (e) {
	module.exports = null;
}
