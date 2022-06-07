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

    const result = stack.length === 0
    console.log(result);
    return result
 
}

msProfiler(() => solution("()()"));