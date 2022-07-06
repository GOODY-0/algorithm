// 자판기는 남은 금액을 어떻게 반환할까?
// 인풋금액 - 음료가격 = 남은 금액
// 남은 금액을 자판기가 취급하는 화폐 단위 순서대로 
// 1000 으로 나누고, 나머지는 500, 100, 50 순서대로 나눠

/* 그리디 알고리즘
  매 선택에서
  지금 이 순간
  가장 최적의 답을 선택하는 알고리즘
*/

function solution(number, k) {
  var answer = '';
  const stack = [];
  
  for(const char of number) {
      const num = Number(char);
      
      while(num > stack[stack.length-1] && k > 0) {
          stack.pop();
          k--;
      }
      stack.push(num);
  }
  
  
  
  while(k > 0) {
      stack.pop();
      k--;
  }
  
 return stack.join("") + '';
}