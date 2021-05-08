const solution = () => {
  let answer = '';
  let num = 1;
  const DFS = (v) => {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  };

  DFS(num);
  // console.log(answer);
};

solution();
