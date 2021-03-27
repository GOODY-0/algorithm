function solution(arr1, arr2) {
    var answer = [];
   
    for(let i = 0; i < arr1.length; i++) {
        let tempAns = [];

        for(let j = 0; j < arr1[i].length; j++) {
            tempAns.push(arr1[i][j] + arr2[i][j]);
            // console.log(tempAns);
        }
        answer.push(tempAns);
    }
    
    console.log(answer);
    return answer;
}

solution([[1,2],[2,3]], [[3,4],[5,6]]);
solution([[1],[2]], [[3],[4]]);