const solution =(m, sequence) => {

    let count = 0;
    
    for(let i = 0; i < sequence.length; i++) {
        let temp = sequence[i];
        for(let j = i+1; j < sequence.length; j++) {
            if(temp + sequence[j] < m) {
                temp += sequence[j];
            }
            else if (temp + sequence[j] > m) {
                temp = 0;
                break;
            }
            else {
                temp = 0;
                count++;
                break;
            }
        }
    }

    // console.log(count);
    return count;
}

solution(6, [1,2,1,3,1,1,1,2]);     // 3