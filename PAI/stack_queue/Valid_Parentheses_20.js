var isValid = function(s) {
    const stack = [];
    const table = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    
    for(let i = 0; i < s.length; i++) {
        if(!table[s[i]]) stack.push(s[i]);    // 여는 괄호면 스택에 푸쉬
        else if (!stack.length || table[s[i]] !== stack.pop()) return false;  // 스택이 벌써 비어버렸거나 스택의 마지막 원소가 현재 검사중인 원소와 짝이 아니면 false
    }
    
    return stack.length === 0   // 스택이 비었다면 true
};
