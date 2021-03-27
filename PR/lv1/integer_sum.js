function solution(a, b) {
    let answer = 0;
    // if(a === b) return a;

    let bigNum = Math.max(a,b);
    let smallNum = Math.min(a,b);
    
    while(bigNum >= smallNum) {
        answer += bigNum--;
    }

    console.log(answer);
    return answer; 
}

solution(3, 3);