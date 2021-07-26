var arrayPairSum = function (nums) {
	nums.sort((a, b) => a - b);
	let result = 0;
	let current = [];

	nums.forEach(num => {
		if (current.length < 2) current.push(num);
		if (current.length === 2) {
			result += Math.min(...current);
			current = [];
		}
	});

	return result;
};
