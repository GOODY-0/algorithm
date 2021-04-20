const solution = (batch) => {
  let sticks = 0;
  const stickStack = [];

  for (let i = 0; i < batch.length; i++) {
    if (batch[i] === '(') stickStack.push(batch[i]);
    else {
      stickStack.pop();
      if (batch[i - 1] === ')') sticks++;
      else sticks += stickStack.length;
    }
  }

  console.log(sticks);
};

const exp1 = '()(((()())(())()))(())'; // 17
const exp2 = '(((()(()()))(())()))(()())'; // 24
solution(exp2);
