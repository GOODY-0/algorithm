var threeSum = function (nums) {
	const answer = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j < nums.length - 1; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;
			for (let k = j + 1; k < nums.length; k++) {
				if (k > j + 1 && nums[k] === nums[k - 1]) continue;
				// nums[인덱스] === nums[인덱스] 체크이유는 이미 for문 돌았던 '값'을 또 for문 돌리기를 막기 위함
				if (nums[i] + nums[j] + nums[k] === 0)
					answer.push([nums[i], nums[j], nums[k]]);
			}
		}
	}

	return answer;
};
threeSum([-1, 0, 1, 2, -1, 4]);
