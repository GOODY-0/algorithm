const solution1 = (numbers, target) => {
  let answer;
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  if (sum < target) return 0;
  if (sum === target) return 1;
  let total = recursion(sum, numbers);
  return answer;
};

// const recursion = (sum, numbers) => {};

// -1+1+1+1+1
// +1-1+1+1+1
// +1+1-1+1+1
// +1+1+1-1+1
// +1+1+1+1-1

function solution(numbers, target) {
  let answer = 0;
  recur(0, 0);
  console.log(answer);

  function recur(count, sum) {
    if (count === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    // left child
    recur(count + 1, sum + numbers[count]);
    // right child
    recur(count + 1, sum - numbers[count]);
  }
}
const numbers = [1, 1, 1, 1, 1];
const target = 3;
solution(numbers, target); // 5
