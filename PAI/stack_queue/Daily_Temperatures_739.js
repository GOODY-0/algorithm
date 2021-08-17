var dailyTemperatures = function(temperatures) {
    const answer = Array.from({length:temperatures.length}, ()=> 0);
    
    
    for(let i = 0; i < temperatures.length; i++) {
        let dayCount = 0;
        for(let j = i+1; j < temperatures.length; j++) {
                if(temperatures[j] > temperatures[i]) {
                    dayCount = j-i;
                    answer[i] = dayCount;
                    break;
                } 
        }
    }
    
    return answer;
};
