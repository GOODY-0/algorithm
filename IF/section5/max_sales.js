const solution = (k, sales) => {
  let max = 0;

  for (let i = 0; i < sales.length; i++) {
    let temp = sales[i];
    for (let j = i + 1; j <= i + (k - 1); j++) {
      if (!sales[j]) break;
      temp += sales[j];
      if (temp > max) max = temp;
    }
  }

  return max;
};

solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]); // 56

38, 46, 56, 55, 55, 49, 52, 47, 28, 15;
