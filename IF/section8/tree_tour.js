const solution = (n) => {
  const DFS = (num) => {
    if (num > n) return;
    else {
      console.log(num);
      DFS(num * 2);
      DFS(num * 2 + 1);
    }
  };
  DFS(1);
};

solution(7);

// 전위순회 출력 : 1 2 4 5 3 6 7
// 중위순회 출력 : 4 2 5 1 6 3 7
// 후위순회 출력 : 4 5 2 6 7 3 1

/* 
        1
      2   3
     4 5 6 7
*/
