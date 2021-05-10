const solution = (num) => {
  let answer = '';

  const DFS = (n) => {
    if (n === 0) {
      return;
    } else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  };

  DFS(11);
  console.log(answer);
};

solution(11); // 1011
// 11%2 1
// 10%2 0
// 5%2 1
// 2%2  1
