function solution(arr)
{
    let answer = [];
    let currNum = 0;
    for(let i = 0; i < arr.length; i++) {
        currNum = arr[i]; 
        if(currNum === arr[i+1]) {
            continue;
        } else {
            answer.push(currNum);
        }
    }
    console.log(answer);
    
    return answer;
}



solution([1,1,3,3,0,1,1]);
