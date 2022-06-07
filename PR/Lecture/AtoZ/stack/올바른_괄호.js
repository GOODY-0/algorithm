const { msProfiler } = require("../../../../lib/msProfiler");

function solution(s){
  const stack = [];
  for (el of s) {
      if(el === "(") {
          stack.push(el);
      } 
      else {
          if(!stack.length) {
              return false;
          }
          else stack.pop();
      }
  }
  console.log(stack.length === 0);
  return stack.length === 0

}

msProfiler(()=>solution("()()()()()()()()()()()()()()(()()()(()()()(()()())()(("))