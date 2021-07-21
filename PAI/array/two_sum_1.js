var twoSum = function (nums, target) {
	const map = new Map();
	nums.forEach((num, i) => map.set(num, i));
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		const complementIdx = map.get(complement);
		if (complementIdx >= 0 && complementIdx !== i) return [i, complementIdx];
	}
};
