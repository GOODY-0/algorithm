const solution = (s, t) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let target = s[i];
    let flag = true;
    for (let j = i + 1; j < i + t.length; j++) {
      target += s[j];
      if (target.length === t.length) {
        let targetMap = new Map();
        for (let str of target) {
          if (targetMap.has(str)) targetMap.set(str, targetMap.get(str) + 1);
          else targetMap.set(str, 1);
        }

        for (let char of t) {
          if (!targetMap.get(char) || targetMap.get(char) === 0) {
            flag = false;
            break;
          } else targetMap.set(char, targetMap.get(char) - 1);
        }

        if (flag) count++;
      }
    }
  }

  console.log(count);
  return count;
};

solution('bacaAacba', 'abc'); // 3
