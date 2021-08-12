var twoSum = function (nums, target) {
  //Input: nums = [2,7,11,15], target = 9
  //Output: [0,1]
  
  const numObj = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];    // complement가 배열 내에 존재한다는것만 알아내면 됌
    if (numObj.has(complement)) return [numObj.get(complement), i]; // map 에 complement가 존재하므로 [complement의 인덱스, 현재 값의 인덱스] 를 반환
    numObj.set(nums[i], i);
  }
};
