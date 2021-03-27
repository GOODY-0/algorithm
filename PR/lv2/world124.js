function solution(n) {

    const numbers = ['4', '1', '2'];
    let answer = '';

    while(n) {
        answer = numbers[n%3] + answer;
        n = (n-1) / 3;
    }
    
    console.log(answer);
    return answer;
}

solution(13);        // 4