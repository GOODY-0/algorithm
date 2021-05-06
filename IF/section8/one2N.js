const solution = (num) => {
  recursion(num);
};

const recursion = (num) => {
  if (num === 0) return;
  else {
    recursion(num - 1);
    console.log(num);
  }
};

solution(3); // 1 2 3
