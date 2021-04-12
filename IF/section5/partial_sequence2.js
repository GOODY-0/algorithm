const solution =(m, sequence) => {

    let count = 0;
    
    for(let i = 0; i < sequence.length; i++) {
        let temp = 0;
        if(sequence[i] < m) {
            temp += sequence[i];
            count++;
        }
        for(let j = i+1; j < sequence.length; j++) {
            if(temp + sequence[j] <= m) {
                temp += sequence[j];
                count++;
            }else {
                break;
            }
        }
    }
    
    return count;
}

solution(5, [1, 3, 1, 2, 3]);     // 10