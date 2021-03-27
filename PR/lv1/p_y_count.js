function solution(s){
    let answer = true;
    let strArr = Array.from(s);
    let pCount = 0;
    let yCount = 0;

    strArr.forEach((e) => {
        if(e === "p") pCount++;
        if(e === "P") pCount++;
        if(e === "y") yCount++;
        if(e === "Y") yCount++;
    });

    return answer = (pCount === yCount) ? true : false;
}

solution("pPoooyY");