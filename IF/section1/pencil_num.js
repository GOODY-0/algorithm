function solution(n) {
    let das = 0;
    for (let i = 1; i <= n; i++) {
        if(i % 12 === 1) das++;
    }
    return das;
}

solution(178)        // 3

