var arrayPairSum = function (nums) {
	nums.sort((a, b) => a - b);
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) result += nums[i];
	}

	return result;
};
