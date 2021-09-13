function solution(expression) {
  const calResults = [];

  // 식에 사용된 연산자들 저장
  const operatorsSet = new Set();
  for (const s of expression) {
    if (s === '+' || s === '*' || s === '-') operatorsSet.add(s);
  }

  // 연산자 우선순위의 모든 경우의 수를 순열로 계산
  const operatorsArr = Array.from(operatorsSet);
  const operatorsP = getPermutation(operatorsArr, operatorsArr.length);

  operatorsP.forEach((operators) => {
    let expressionCopy = expression.split('');
    while (operators.length) {
      // 경우의 수 배열 내의 연산자를 하나씩 꺼내서 주어진 표현식 계산
      const operator = operators.pop();
      expressionCopy = getCalculationResult(expressionCopy, operator);
    }
    calResults.push(Math.abs(Number(...expressionCopy)));
  });

  return calResults.reduce((acc, cur) => {
    return cur > acc ? cur : acc;
  });
}

// 주어진 표현식 expression 내에서 operator 와 일치하는 연산자만 계산하여 반환
function getCalculationResult(expression, operator) {
  let i = 0;
  const expressionCopy = expression;

  while (true) {
    let lp = i - 1,
      rp = i + 1;
    const lpNumStack = [];
    const rpNumStack = [];
    if (expressionCopy[i] === operator) {
      // 연산자 인덱스를 기준으로 좌우로 포인터 하나씩 퍼트리며 numStack 에 숫자만 저장
      while (!isNaN(expressionCopy[lp])) {
        lpNumStack.push(expressionCopy[lp]);
        lp--;
      }
      while (!isNaN(expressionCopy[rp])) {
        rpNumStack.push(expressionCopy[rp]);
        rp++;
      }
      const subExpressionLength = lpNumStack.length + rpNumStack.length + 1; // 연산자까지 splice 계산에 포함해야 하므로 + 1
      const lpNum = Number(lpNumStack.reverse().join(''));
      const rpNum = Number(rpNumStack.join(''));
      const beforeLength = expressionCopy.length;
      expressionCopy.splice(lp + 1, subExpressionLength, cal(lpNum, rpNum, operator));
      if (beforeLength !== expressionCopy.length) i = 0; // splice 성공하면 i 초기화해서 expression 다시 순회 (expression 내에 operator 와 일치하는 연산자 복수개 존재할 경우를 위해)
    }
    i++;
    if (expressionCopy.includes(operator) && i > expression.length) {
      i = 0;
      continue;
    }
    if (i > expression.length || expressionCopy.length === 1) break;
  }

  return expressionCopy;
}

// 배열 arr에서 selectedNumber 개를 뽑는 순열 반환
function getPermutation(arr, selectedNumber) {
  const result = [];
  if (selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.filter((_, index) => idx !== index);
    const permutaion = getPermutation(rest, selectedNumber - 1);
    const attached = permutaion.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
}

function cal(a, b, operator) {
  switch (operator) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
  }
}
