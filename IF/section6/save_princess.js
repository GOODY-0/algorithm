const solution = (n, k) => {
  const princes = [];
  const deadPrinces = [];
  let count = 0;

  for (let i = 1; i <= n; i++) {
    princes.push(i);
  }

  while (deadPrinces.length !== princes.length) {
    for (let i = 0; i < princes.length; i++) {
      if (princes[i]) count++;
      if (princes[i] && count % k === 0) {
        count = 0;
        deadPrinces.push(princes[i]);
        princes[i] = 0;
      }
    }
  }
  console.log(deadPrinces.pop());
};

solution(10, 3);

// 1 2 3 4 5 6 7 8
