const solution = (str) => {
    // ( 가 나오면 count++ ) 가 나오면 count-- 
    // count가 0일 때 만 answer에 char 더해주기

    count = 0;
    answer = '';
    for(let char of str) {
        if(char === "(") count++;
        else if (char === ")") count--;
        if(!count && (char !== ")" && char !== "(")) answer += char;
    }

    return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")) // EFLM