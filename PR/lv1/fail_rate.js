function solution(N, stages) {
    var answer = [];
    const sortedStages = stages.sort((a,b) => a-b);
    const stagesCopy = sortedStages.slice(0);
    let curStage = [];
    let failRate = 0;
    let players = stagesCopy.length;
    const obj = {};
    let stage = 1;

    for(let i = 0; i < stagesCopy.length; i++) {
        if(stagesCopy[i] === stagesCopy[i+1]) curStage.push(stagesCopy[i]);
        else {
            curStage.push(stagesCopy[i]);
            failRate = curStage.length/players;
            stage = curStage[0];
            if(stage > N) {
                failRate = 0;
            }
            obj[stage] = failRate;
            players -= curStage.length;
            curStage = [];
        }
    }


    for(let i = 1; i <= N; i++) {
        if(obj[i] === undefined) {
            obj[i] = 0;
        }
    }

    
    let sortObj = [];
    for(let number in obj) {
        sortObj.push([number, obj[number]]);
    }
    sortObj.sort((a,b) => {
        return b[1] - a[1];
    });

    for(let i = 0; i < sortObj.length; i++) {
        answer.push(Number(sortObj[i][0]));
    }
    
    if(answer[answer.length-1] > N) answer.pop();
    
    // console.log(sortObj);
    console.log(answer);


    return answer;
}

solution(10 ,[1,2,4,5]);      // [3,4,2,1,5]
solution(5 ,[2, 1, 2, 6, 2, 4, 3, 3]);      // [3,4,2,1,5]
solution(4 ,[4, 4, 4, 4, 4]);               // [4,1,2,3]
solution(6 ,[1,2,2,1,3,4,5,5,6,7]);               // [4,1,2,3]