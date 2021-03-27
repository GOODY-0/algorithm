function solution(n) {
    var answer = '';
    
    let toggle = 0;
    for(let i = 0; i < n; i++) {
        if(toggle === 0)  {
            answer += "수";
            toggle = 1;
            continue;
        }

        if(toggle === 1) {
            answer += "박";
            toggle = 0;
            continue;
        }


    }
    console.log(answer);
    return answer;
}

solution(4);