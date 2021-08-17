var removeDuplicateLetters = function (s) {
  const counter = new Map();
  const stack = [];

  // 문자별 카운터 생성
  for (let v of s) {
    if (counter.get(v)) counter.set(v, counter.get(v) + 1);
    else counter.set(v, 1);
  }

  for (let v of s) {
    counter.set(v, counter.get(v) - 1); // 해당 문자 카운터--
    if (stack.includes(v)) continue; // 스택에 해당 문자 있다면 건너뜀

    // 해당 문자가 스택 마지막 문자보다 작고, 스택 마지막 문자의 카운트가 1 이상이면 스택 팝
    // v 를 검사할 때  스택에서 pop 되는 문자는 v 보다 앞쪽 인덱스의 문자이다
    while (v < stack[stack.length - 1] && counter.get(stack[stack.length - 1]) > 0) {
      stack.pop();
    }
    stack.push(v);
  }

  return stack.join('');
};

removeDuplicateLetters('cbadabcc');
