const solution = (batch) => {
  let sticks = 0;
  const stickStack = [];

  for (let char of batch) {
    if (char === '(') stickStack.push(char);
    else {
      stickStack.pop();
      sticks += stickStack.length;
      //   sticks++;
    }
  }

  console.log(sticks);
};

const exp1 = '()(((()())(())()))(())'; // 17
const exp2 = '(((()(()()))(())()))(()())'; // 24
solution(exp1);
