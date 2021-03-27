function solution(x) {
    var answer = true;

    const str = x + '';
    const arr = str.split("");
    const sum = arr.reduce((acc, cur) => {
        return acc += Number(cur);
    }, 0)
    
    if(x % sum === 0){
        answer = true;
    } else {
        answer = false;
    }
    
    console.log(answer);
    return answer;
}

solution(10);
solution(12);
solution(11);
solution(13);