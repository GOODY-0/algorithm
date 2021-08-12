var productExceptSelf = function (nums) {
  
  // 각 원소 값은 자신을 제외한 나머지 원소끼리의 곱으로 대체되어야 한다.
  // Input: nums = [1,2,3,4]
  // Output: [24,12,8,6]
  
  const result = [];

  // 본인을 제외한 왼쪽 값들끼리 곱
  let d = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(d);
    d *= nums[i];
  }
  // result = [1, 1, 2, 6] 

  // result below should be [24, 12, 4, 1]   because [1,1,2,6] * [24,12,4,1] === [24,12,8,6]
  // 본인을 제외한 오른쪽 값들끼리 곱
  d = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * d;    // 6 = 6*1 // 8 = 2*4 // 12 = 1*12 // 24 = 1*24
    d *= nums[i];                 // d = 1(d) * 4 * 3 * 2 * 1
  }

  return result;
};
