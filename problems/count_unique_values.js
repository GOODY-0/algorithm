/*
  Problem : 
    Write a function called countUniqueValues,
    which accepts a sorted array, and counts the
    unique values in the array. There can be negative
    numbers in the array, but it will always be sorted.

  Concrete Example : 
    * [1,1,1,1,1,2] => 2
    * [1,1] => 1
    * [1,2,3,4,4,4,7,7,12,12,13] => 7
    * [0] => 1
    * [] => 0
    * [-2, -1, -1, 0, 1] => 4
  
  Break it down (Map 풀이) :
    * 배열 내 각 원소의 value를 key 로 갖는 Map 자료구조 생성
    * Map 의 길이 반환
*/

function countUniqueValues(values) {
  const valuesMap = {};
  values.forEach((value) => {
    if (!valuesMap[value]) {
      valuesMap[value] = true;
    }
  });

  return Object.keys(valuesMap).length;
}

console.log(countUniqueValues([1, 2, 3, 4, 5]));
console.log(countUniqueValues([1, 1, 1, 1, 5]));
console.log(countUniqueValues([1, 1]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([0]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
