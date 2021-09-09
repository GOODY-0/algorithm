function solution(s) {
  var answer = [s.length];
  const maxBundleSize = Math.floor(s.length / 2);
  const words = [];

  for (let i = 1; i <= maxBundleSize; i++) {
    let count = 1;
    let subStr = '';
    for (let j = 0; j < s.length; j += i) {
      const first = s.substring(j, j + i);
      const second = s.substring(j + i, j + i * 2);
      console.log(`first : ${j}, ${j + i}, ${first}`);
      console.log(`second : ${j + i}, ${j + i * 2}, ${second}`);

      if (first === second) count++;
      else {
        if (count === 1) subStr += first;
        else {
          subStr += count + first;
          count = 1;
        }
      }
    }
    words.push(subStr);
    answer.push(subStr.length);
  }

  return Math.min(...answer);
}

solution('aababa');
