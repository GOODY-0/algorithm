var twoSum = function (nums, target) {
  const numObj = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numObj.has(complement)) return [numObj.get(complement), i];
    numObj.set(nums[i], i);
  }
};
