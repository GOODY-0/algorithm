function solution(heights) {
    let sevenDwarves = [];

    for (let i = 0; i < heights.length; i++) {
        let currentArray = [];
        let flag100 = false;
        let sum = 0;
        for (let j = 0; j < heights.length; j++) {
            if (j === i) continue;
            sum += heights[j];
            currentArray.push(heights[j]);
            if (sum === 100) {
                flag100 = true;
                break;
            }
            else if (sum > 100) break;
        }
        if(flag100) sevenDwarves = currentArray;
    }
    return sevenDwarves;
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);