var threeSum = function (nums) {
  
  // Input: nums = [-1,0,1,2,-1,-4]
  // Output: [[-1,-1,2],[-1,0,1]]
  
  const map = new Map();
  nums.sort((a, b) => a - b); // -4 -1 -1 0 1 2
  const result = [];
  let fix;
  for (let i = 0; i < nums.length; i++) {
    // 숫자 하나를 고정해두고 left, right 포인터만 이동함
    if (nums[i] === fix) continue;
    fix = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    // left, right 포인터 이동하며 fix와의 합이 0 인지 검사
    while (left < right) {
      if (fix + nums[left] + nums[right] < 0) left++;
      else if (fix + nums[left] + nums[right] > 0) right--;
      else {
        if (map.get(fix) !== nums[left]) {   // fix는 고정이니 차치하고, nums[left] 가 같다는건 합이 0이어도 중복이므로 건너뛰어야함.
          result.push([fix, nums[left], nums[right]]);
          map.set(fix, nums[left]);  
        }
        // 합이 0 이니 left right 둘다 이동해도 괜찮다.
        left++; 
        right--;
      }
    }
  }

  return result;
};
