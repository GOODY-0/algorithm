// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
  let answer = '';
  let arr = [...new_id];

  // 1단계
  let regex = /[A-Z]/;
  arr = arr.map((el) => {
    if (el.match(regex)) return el.toLowerCase();
    else return el;
  });

  // 2단계
  regex = /[a-z]|[0-9]|[-_.]/;
  arr = arr.filter((el) => {
    return el.match(regex);
  });

  // 3단계
  const tempArr = [];
  let startIdx;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '.') {
      tempArr.push(arr[i]);
      startIdx = i;
    } else if (arr.indexOf(arr[i], startIdx) === i) {
      tempArr.push(arr[i]);
    }
  }
  arr = tempArr;

  // 4단계
  while (arr[0] === '.') arr.shift();
  while (arr[arr.length - 1] === '.') arr.pop();

  // 5단계
  if (arr.length === 0) arr.push('a');

  // 6단계
  if (arr.length > 15) arr = arr.slice(0, 15);
  while (arr[arr.length - 1] === '.') arr.pop();

  // 7단계
  if (arr.length <= 2) {
    while (arr.length !== 3) {
      arr.push(arr[arr.length - 1]);
    }
  }

  answer = arr.join('');
  return answer;
}

solution('...!@BaT#*..y.abcdefghijklm');
solution('..........................b');
solution('......b...');
