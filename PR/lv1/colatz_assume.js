function solution(num) {
    var answer = 0;
    let result = num;

    while(result !== 1 && answer < 500) {
        if(result % 2 === 0) {
            result = result / 2;
            answer++;
            continue;
        }
        if(result % 2 !== 0) result = (result * 3) + 1;
        answer++;
    }
  
    if(answer >= 500) answer = -1;
    console.log(answer);
    return answer;
}

solution(6);
solution(16);
solution(626331)