const solution = (n) => {
  // print 1 ~ n
  const DFS = (num) => {
    if (num > n) return;
    else {
      console.log(num);
      DFS(num + 1);
    }
  };

  DFS(1);
};

solution(3); // 1 2 3
