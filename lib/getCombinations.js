function getCombinations(arr, selectedNumber) {
  const results = [];
  if (selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectedNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
