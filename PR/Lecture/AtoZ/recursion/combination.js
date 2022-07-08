const { msProfiler } = require("../../../../lib/msProfiler");
// O(2^n)
function combination(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combs = combination(rest, n - 1);
    const combine = combs.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

msProfiler(() => console.log(combination([5, 4, 3], 2)));
