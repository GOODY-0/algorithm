function solution(progresses, speeds) {
    var answer = [];
    let stack = [];

    while(progresses.length > 0) {

        for(let i = 0; i < progresses.length; i++) {
            if(progresses[i] < 100){
                progresses[i] += speeds[i];
            } 
    
        }

        while(progresses[0] >= 100) {
            stack.push(progresses.shift());
            speeds.shift();
        }

        if(stack.length !== 0) {
            answer.push(stack.length);
            stack = [];
        }
    }

    console.log(answer);
    return answer;
}

solution([93,30,55], [1,30,5]);
solution([95,90,99,99,80,99], [1,1,1,1,1,1]);
solution([0,1,1,0,1,1], [100,100,100,100,100,100]);
solution([0,50,1,20,1,99,1], [10,49,12,10,100,1,1]);