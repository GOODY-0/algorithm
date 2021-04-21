const solution = (nums) => {
  let pointer = 0;
  while (pointer < nums.length) {
    const minIdx = getMinIdx(nums, pointer);
    [nums[pointer], nums[minIdx]] = [nums[minIdx], nums[pointer]];
    pointer++;
  }
  return nums;
};

const getMinIdx = (arr, pointer) => {
  let minIndex;
  arr.reduce((min, num, i) => {
    if (min > num && i >= pointer) {
      minIndex = i;
      return (min = num);
    } else return min;
  }, 100);
  return minIndex;
};

solution([13, 5, 11, 7, 23, 15]); // 5 7 11 13 15 23
