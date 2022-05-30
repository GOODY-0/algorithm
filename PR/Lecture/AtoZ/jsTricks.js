// 1. 구조 분해 할당을 이용한 변수 swap
const swap = () => {
  let a = 5, b = 10;
  [a,b] = [b,a];
  console.log(a,b);
}

// 2. 배열 생성으로 루프 제거
// const sum = 5+6+7+8+9
const sum = Array
  .from(new Array(5), (_, k) => k + 5)
  .reduce((acc, cur) => acc + cur, 0);

// 3. 배열 내 같은 요소 제거
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayForm = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

// 4. Spread 연산자를 이용한 객체 병합
const person = {
  name: "Jung Jun-Young",
  familyName : "Jung",
  givenName : "Jun-Young"
};
const company = {
  name : "Jejodo. Inc.",
  address : "Seoul"
};
const jungJunYoung = {...person, ...company};