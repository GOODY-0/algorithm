var arrayPairSum = function (nums) {
  // Input: nums = [1,4,3,2]
  // Output: 4
  // 주어진 배열 내 원소를 두 개씩 짝지어 두 수 중 작은 수들만 모아서 다 더했을 때 가장 큰 수를 반환 
  // min[1,2] + min[3,4] = 4  v
  // min[1,4] + min[2,3] = 3
  // min[1,3] + min[2,4] = 3
  
  
  // 정렬한 후 2n 번째 원소들끼리 더하면 된다.
  let max = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) max += nums[i];
  }

  return max;
};
