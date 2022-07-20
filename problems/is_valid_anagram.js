/*
  Problem : 
    Given two strings, write a function to determine if the second string is an anagram of the first.
    An anagram is word, phase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  Concrete Example : 
    * validAnagram('', '') => true
    * validAnagram('aaz', 'zza') => false
    * validAnagram('qwerty', 'ytwerq') => true
  
  Break it down :
    * 문자열 A, B 를 순회하며 각 char의 갯수를 객체 a,b 에 저장한다. ex : {a : 2, c : 1, }
    * 객체 a를 key 로 순회하며 (value 는 갯수)
    * a[key] === b[key] 인지 검사한다.
*/

function validAnagram(strA, strB) {
  const countA = {};
  const countB = {};

  for (const char of strA) {
    countA[char] = ++countA[char] || 1;
  }

  for (const char of strB) {
    countB[char] = ++countB[char] || 1;
  }

  for (const key of Object.keys(countA)) {
    if (countA[key] !== countB[key]) {
      return false;
    }
  }

  return true;
}
