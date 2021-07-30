var productExceptSelf = function (nums) {
  const result = [];

  let d = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(d);
    d *= nums[i];
  }

  d = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * d;
    d *= nums[i];
  }

  return result;
};
