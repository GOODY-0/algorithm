const solution = (nums) => {
  const sortedArray = [0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (
        nums[i] > sortedArray[j] &&
        (nums[i] < sortedArray[j + 1] || j === sortedArray.length - 1)
      ) {
        sortedArray.splice(j + 1, 0, nums[i]);
        break;
      }
    }
  }
  sortedArray.shift();
  console.log(sortedArray);
};

solution([11, 7, 5, 6, 10, 9]);
