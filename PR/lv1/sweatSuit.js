function solution(n, lost, reserve) {
    let answer = 0;
    lost = lost.sort((a,b) => a-b);
    reserve = reserve.sort((a,b) => a-b);
    

    for(let i = 0; i < lost.length; i++) {
        if(reserve.indexOf(lost[i]) !== -1)  {
            const lostNum = lost.splice(i,1);
            const idx = reserve.indexOf(lostNum[0]);
            if(idx !== -1) {
                reserve.splice(idx,1);
                i--;
            }
        }
    }

    
    for(let i = 0; i < lost.length; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if(lost[i] === reserve[j] + 1 || lost[i] === reserve[j] - 1) {
                lost.splice(i,1);
                reserve.splice(j,1);
                i--;
                j--;
            }
        }
    }


    
    
    answer = n - lost.length;
    console.log(answer);
    return answer;
}


solution(5, [2, 4], [1, 3, 5]);          // 5
solution(5, [2, 4], [3]);                // 4
solution(3, [3], [1]);                   // 2
solution(2, [2], [3]);                   // 2
solution(7, [3, 7], [1, 3, 5]);
solution(5, [1,2,3,4,5], [3]);
solution(5, [1,2,3,4,5], [3,4]);
solution(5, [2,3,6,9], [3,6,12,9]);









// console.log(lost, reserve);
