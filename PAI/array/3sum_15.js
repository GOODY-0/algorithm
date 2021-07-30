var threeSum = function (nums) {
  const map = new Map();
  nums.sort((a, b) => a - b); // -4 -1 -1 0 1 2
  const result = [];
  let fix;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === fix) continue;
    fix = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (fix + nums[left] + nums[right] < 0) left++;
      else if (fix + nums[left] + nums[right] > 0) right--;
      else {
        if (map.get(fix) !== nums[left]) {
          result.push([fix, nums[left], nums[right]]);
          map.set(fix, nums[left]);
        }
        left++;
        right--;
      }
    }
  }

  return result;
};
