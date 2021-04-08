const solution = (numbers) => {
    const maxCandidates = [];
    let maxSum = 0;
    let maxNum = 0;

    const numObjects = numbers.map((el) => {
        const str = el + '';
        const arr = str.split('');
        const sum = arr.reduce((acc, cur) => {
            return acc += Number(cur);
        }, 0);
        return ({ number: el, sum: sum })
    });
    
    numObjects.sort((a, b) => b.sum - a.sum);
    for (let i = 0; i < numObjects.length; i++) {
        if (numObjects[i].sum >= maxSum) {
            maxSum = numObjects[i].sum;
            maxCandidates.push(numObjects[i]);
        }
        else break;
    }

    maxCandidates.forEach((el) => {
        if (el.number > maxNum) maxNum = el.number;
    });
    
    return maxNum;
}

const numbers = [370, 128, 460, 603, 40, 521, 137, 123];
solution(numbers);  // 137