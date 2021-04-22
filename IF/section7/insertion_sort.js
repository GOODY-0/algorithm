const solution = (nums) => {
  const sortedArray = [0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (nums[i] > sortedArray[j]) {
        sortedArray.splice(j, 0, nums[i]);
        break;
      }
    }
  }

  console.log(sortedArray);
};

solution([11, 7, 5, 6, 10, 9]);
