/*
  Problem : 
    Write a function called same, which accepts two arrays.
    The function should return true if every value in the
    array has it's corresponding value squared in the second
    array. The Frequency of values must be the same.

  Concrete Example : 
    * [1,2,3] => [1,4,9] || [4,1,9] || [9,1,4] || ...
    * [1,1,1] => [1,1,1]
    * [9,1,1] => [81, 1, 1]
    * [0, 0] => [0, 0]
    * 
  
  Break it down :
    * 배열 A, B 를 순회하며 각 원소의 갯수를 객체 a,b 에 저장한다. {1 : 2, 2 : 1, }
    * 객체 a를 key 로 순회하며 
    * a[key] === b[key**2] 인지 검사한다.
*/

function same(arrayA, arrayB) {
  const objA = {};
  const objB = {};
  for (const num of arrayA) {
    objA[num] = ++objA[num] || 1;
  }
  for (const num of arrayB) {
    objB[num] = ++objB[num] || 1;
  }

  for (const numA of Object.keys(objA)) {
    if (objA[numA] !== objB[numA ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [1, 16, 9]));
console.log(same([1, 1, 1], [1, 1, 1]));
console.log(same([9, 1, 1], [81, 1, 1]));
console.log(same([0, 0], [0, 0]));
