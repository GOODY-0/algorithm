const solution = (nums) => {
  let answer = "NO";
  let flag = 0;
  const check = new Array(nums.length);
  check.fill(1);
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  const DFS = (dt) => {
    if (flag) return;
    if (dt === nums.length + 1) {
      let sum = 0;
      for (let i = 0; i < check.length; i++) {
        if (check[i] === 1) {
          sum += nums[i];
        }
      }

      if (sum * 2 === total) {
        answer = "YES";
        flag = 1;
      }
    } else {
      check[dt] = 1;
      DFS(dt + 1);
      check[dt] = 0;
      DFS(dt + 1);
    }
  };

  DFS(1);
  console.log(answer);
};

solution([1, 3, 5, 6, 7, 10]); // YES  (1,3,5,7) => 16 (6, 10) => 16
