/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
const addToTwelve = (nums, i = 0) => {
	debugger;
	if (i < nums.length) {
		if (addToTwelve(nums, i + 1)) {
			return true;
		}

		return nums[i] + nums[i + 1] === 12;
	}
	return false;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = addToTwelve;
} catch (e) {
	module.exports = null;
}
