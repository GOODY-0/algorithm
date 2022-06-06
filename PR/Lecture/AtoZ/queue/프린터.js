
function valIsMaxOfArr (val, arr) {
    const max = Math.max(...arr.reduce((acc, cur) => {
       return [...acc, cur.val] 
    },[]));
    return val >= max
}

function solution(priorities, location) {
    // 정렬하면 val 이 같은 경우 인덱스를 기준으로 해도 순서가 꼬임. 정렬노노
    var answer = 0;
    const queue = priorities.map((el,idx) => ({val: el, idx}))
    const printQueue = [];

    // 원하는 종이의 우선순위가 가장 높으면 1등으로 프린트 하면 안돼
    // [1,1,1,1,1,1] , 3 인 경우가 예외
    // if(priorities[location] === maxPriority) return 1;
    
    
    while(queue.length) {
        const curr = queue.shift();
        if(valIsMaxOfArr(curr.val, queue)) {
            printQueue.push(curr)
        }
        else {
            queue.push(curr)
        }
        
    }
    
    // 원래 큐에서 인덱스가 location 이었던 원소의 최종 printQueue 에서의 인덱스(+1)가 정답
    for(let i = 0; i < printQueue.length; i++) {
        if(printQueue[i].idx === location) {
            answer = i+1;
            break;
        }
    }
    
    return answer;
}

const {msProfiler} = require('../../../../lib/msProfiler');
msProfiler(()=>solution([1,2,3,4,5],2));