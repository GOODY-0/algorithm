function solution(x, n) {
    var answer = [];
    const originX = x;

    for(let i = 0; i < n; i++) {
        answer.push(x);
        x += originX;
    }

    console.log(answer);

    return answer;
}

solution(2, 5); 
solution(4, 3);
solution(-4, 2);