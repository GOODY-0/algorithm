// O(n!)
const { msProfiler } = require("../../../../lib/msProfiler");
function permutaion(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutaion(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

msProfiler(() => console.log(permutaion([5, 4, 3], 2)));
