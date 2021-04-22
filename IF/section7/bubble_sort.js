const solution = (nums) => {
  for (let j = 0; j < nums.length - 1; j++) {
    for (let i = 0; i < nums.length - 1 - j; i++) {
      if (nums[i] > nums[i + 1])
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
  console.log(nums);
};

solution([13, 5, 11, 7, 23, 15]);
solution([13, 5, 7, 30, 24, 1, 200]);
solution([1, 2, 3, -3, -2, 5, 6, -6]);
