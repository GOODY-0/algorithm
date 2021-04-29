const solution = (arr, num) => {
  arr.sort((a, b) => a - b);
  let answer;

  const lp = 0;
  const rp = arr.length - 1;

  answer = recursion(arr, num, lp, rp);
  if (answer === 'None') return 'None';
  else return answer;
};

const recursion = (arr, num, lp, rp) => {
  const center = Math.floor((lp + rp) / 2);
  if (arr[center] === num) return center;
  else if (arr[center] > num) rp = center - 1;
  else if (arr[center] < num) lp = center + 1;
  if (lp > rp) return 'None';
  else return recursion(arr, num, lp, rp);
};

solution([7, 28, 43, 67, 88, 92, 100], 100); // 7
solution([23, 87, 65, 12, 57, 32, 99, 81], 32); // 3

// const solution = (arr, num) => {
//   arr.sort((a, b) => a - b);
//   let found = 0;
//   let answer = 0;
//   found = dig(arr, num);
//   console.log(found + 1);
// };

// const dig = (arr, num) => {
//   let found = 0;
//   if (arr.length === 1 && arr[0] === num) found = 0;
//   else if (arr.length === 1 && arr[0] !== num) found = 'not found';
//   else {
//     const center = Math.floor(arr.length / 2);
//     if (arr[center] > num) {
//       const subArr = arr.slice(0, center);
//       found = dig(subArr, num);
//     } else if (arr[center] < num) {
//       const subArr = arr.slice(center, arr.length);
//       found = dig(subArr, num);
//     } else {
//       found = center;
//     }
//   }
//   return found;
// };
