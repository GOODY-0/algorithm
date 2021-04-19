const solution = (str) => {
  const nums = [];

  for (let char of str) {
    if (+char) nums.push(+char);
    else {
      const a = nums.pop();
      const b = nums.pop();
      if (char === '+') nums.push(b + a);
      else if (char === '-') nums.push(b - a);
      else if (char === '*') nums.push(b * a);
      else if (char === '/') nums.push(b / a);
    }
  }

  console.log(nums);
};

solution('352+*9-'); //12
