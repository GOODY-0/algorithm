const solution = (numbers) => {
 
    const numObjects = [];
    const maxCandidates = [];

    numbers.forEach((el, idx) => {
        const str = el + '';
        const arr = str.split('');
        const sum = arr.reduce((acc, cur) =>{
            return acc += Number(cur);
        }, 0);
       numObjects.push(
           {number: el, sum: sum}
       );
        
    });
    let maxSum = 0;
    numObjects.sort((a,b) => b.sum - a.sum);
    for(let i = 0; i < numObjects.length; i++) {
        if(numObjects[i].sum >= maxSum) {
            maxSum = numObjects[i].sum;
            maxCandidates.push(numObjects[i]);
        }
        else break; 
    }

    let maxNum = 0;
    maxCandidates.forEach((el) => {
        if(el.number > maxNum) maxNum = el.number;
    });

    return maxNum;
}

const numbers= [370, 128, 460, 603, 40, 521, 137, 123];
solution(numbers);  // 137