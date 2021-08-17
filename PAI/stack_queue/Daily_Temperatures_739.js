var dailyTemperatures = function(temperatures) {
    const answer = Array.from({length: temperatures.length}, ()=> 0);
    const stack = [];
    
    for(let i = 0; i <temperatures.length; i++) {
       
        while(stack.length && stack[stack.length-1].val < temperatures[i]) {
            const last = stack.pop();
            answer[last.idx] = i - last.idx
        }
        
        stack.push({val:temperatures[i], idx: i})
    }
    
    
    return answer;
};
