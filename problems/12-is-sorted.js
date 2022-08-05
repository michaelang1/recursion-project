/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(nums, i = 0) {
	if (i < nums.length - 1) {
		if (isSorted(nums, i + 1)) {
			return nums[i] <= nums[i + 1];
		}
		return false;
	}
	return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = isSorted;
} catch (e) {
	module.exports = null;
}
