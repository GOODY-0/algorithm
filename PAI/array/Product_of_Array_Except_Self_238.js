var productExceptSelf = function (nums) {
	const result = [];

	// nums[i] 의 왼쪽 원소들끼리 곱
	let p = 1;
	for (let i = 0; i < nums.length; i++) {
		result.push(p);
		p = p * nums[i]; // p 는 지나온 원소들끼리의 곱으로 업데이트
	}

	// nums[i] 의 오른쪽 원소들끼리 곱
	p = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] = result[i] * p;
		p = p * nums[i];
	}

	return result;
};
