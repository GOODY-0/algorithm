function getPermutation(arr, selectedNumber) {
  const result = [];

  if (selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.filter((_, index) => idx !== index);
    const permutaion = getPermutaion(rest, selectedNumber - 1);
    const attached = permutaion.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}
