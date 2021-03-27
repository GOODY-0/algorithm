function solution(nums) {
    var answer = 0;
    const monCountLimit = nums.length/2;
    const setNums = new Set(nums);

    if(monCountLimit > setNums.size) {
        answer = setNums.size;
    }
    
    if(monCountLimit <= setNums.size) {
        answer = monCountLimit;
    }

    console.log(answer);
    return answer;
}

solution([3,1,2,3]);         // 2
solution([3,3,3,2,2,4]);     // 3
solution([3,3,3,2,2,2]);     // 2
solution([1,2,3,4,5,6,7,8,8,8]);     // 4
// 1,2,3,4      5