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
  
  return stack.length === 0

}