const solution = (horseCnt, barn) => {
  let answer = 1;
  barn.sort((a, b) => a - b);
  let lt = 1;
  let rt = barn[barn.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (horseCnt <= count(barn, mid)) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  console.log(answer);
};

const count = (barn, dist) => {
  let cnt = 1;
  let ep = barn[0];
  for (let i = 1; i < barn.length; i++) {
    if (barn[i] - ep >= dist) {
      cnt++;
      ep = barn[i];
    }
  }
  return cnt;
};

solution(3, [1, 2, 8, 4, 9]);
