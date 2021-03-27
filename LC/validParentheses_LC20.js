var isValid = function(s) {
    const arr = s.split("");
    const stack = [];
    let answer = true;
    
    if(arr.length === 1) return false;
    if(arr[0] === ")" || arr[0] === "]" || arr[0] === "}") return false;

    arr.forEach((el) => {
        if(el === "(" || el === "[" || el === "{") {
            stack.push(el);
            return;
        }
        

        if((el === ")" && stack[stack.length-1] === "(") || 
            (el === "]" && stack[stack.length-1] === "[") ||
            (el === "}" && stack[stack.length-1] === "{"))  {
                stack.pop();
            } else {
                answer = false;
            }
    });
    if(stack.length !== 0) answer = false;
    console.log(answer);
    return answer;
 
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([)]");
isValid("{[]}");
isValid("(])");