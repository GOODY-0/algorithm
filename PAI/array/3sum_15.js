var threeSum = function (nums) {
	const answer = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] === nums[i - 1]) continue;

		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum < 0) {
				left++;
			} else if (sum > 0) {
				right--;
			} else {
				answer.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				// 바로 위에서 중복체크 했으므로 left 와 right 둘 다 이동해도 괜찮음
				left++;
				right--;
			}
		}
	}

	return answer;
};
