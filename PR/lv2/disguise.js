const solution = (clothes) => {
  let answer = 1;
  const hashMap = new Map();
  clothes.forEach((el) => {
    if (hashMap.has(el[1])) hashMap.set(el[1], hashMap.get(el[1]) + 1);
    else hashMap.set(el[1], 1);
  });

  for (let x of hashMap.values()) {
    answer *= x + 1;
  }
  console.log(answer - 1);
  return answer - 1;
};
const clothes1 = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'], // 3+(2*1) = 5
]; // 5
const clothes2 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'], // 3 + (1*) = 3
]; // 3
const clothes3 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
  ['nude', 'body'], // 4 + (2*1) = 6
]; // 7
const clothes4 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'body'],
  ['smoky_makeup', 'pants'],
  ['nude', 'headgear'], // 4
]; // 7

// c, cb, cs, cn, cbs, csn, cbsn  = 7
// b, bs, bn, bsn  = 4
// s, sn = 2
// n = 1

solution(clothes1);

// clothes를 돌면서 clothes[1] 을 key, clothes[0]을 value로 저장 => headgear는 2, eyewear 는 1
// yellowhat
// green_turban
// bluesunglasses
// yellowhat bluesunglasses
// green_turban bluesunglasses
