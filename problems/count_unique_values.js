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
    * 
    * 
  Break it down (Multiple Pointer 풀이) :
    * left, right 인덱스 0, 1으로 초기화
    * 배열의 left 값과 right 값 비교
    * 같으면 right++
    * 다르면 left++, left 에 right 의 값을 할당하여 left 가 계속 커지는 걸 막음
*/

function countUniqueValues(values) {
  if (!values.length) return 0;
  let left = 0;
  let right = 1;

  while (right <= values.length - 1) {
    if (values[left] === values[right]) {
      right++;
    } else {
      left++;
      values[left] = values[right];
    }
  }
  return left + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 5]));
console.log(countUniqueValues([1, 1, 1, 1, 5]));
console.log(countUniqueValues([1, 1]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([0]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
