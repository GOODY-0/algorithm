const solution = (nums) => {
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] < 0 && nums[i] > 0) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }

  console.log(nums);
};

solution([1, 2, 3, -3, -2, 5, 6, -6]);
solution([-100, -200, 25, 50, 12, -300, 200]);
