function solution(s) {
  var answer = 0;
  let tempStr = '';
  let result = '';

  for (const char of s) {
    if (!Number.isNaN(Number(char))) {
      result += char;
      continue;
    }
    tempStr += char;
    const num = getNum(tempStr);
    if (num !== undefined) {
      result += num;
      tempStr = '';
    }
  }

  answer = Number(result);
  return answer;
}

function getNum(key) {
  const map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return map[key];
}
