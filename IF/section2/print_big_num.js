function solution(numbers) {
    let result = [];

    numbers.reduce((pre, cur) => {
        if(cur > pre) result.push(cur);
        return pre = cur;
    }, 0)

    console.log(result);
    return result;
}

solution([7,3,9,5,6,12]);   //7 9 6 12
