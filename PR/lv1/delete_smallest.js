function solution(arr) {
    var answer = [];
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);
    
    arr.splice(idx, 1);
    answer = arr;
    if(answer.length === 0) answer.push(-1);

    return answer;
}