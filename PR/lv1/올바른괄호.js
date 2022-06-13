const msProfiler = require("../../lib/msProfiler").msProfiler;

function solution(s){
  if(s[0] === ")" || s[s.length-1] === "(") {
    return false;
  } 
  let result = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
      result += 1;
    }
    else if(s[i] === ")") {
      result -= 1;
    }
  }
  console.log(result, result===0)
  return result === 0
}

msProfiler(()=>solution("()))()((()()"))