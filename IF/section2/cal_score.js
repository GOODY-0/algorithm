const solution = (testResult) => {
    let total = 0;

    const result = testResult.reduce((acc, cur) => {
        if(cur === 1) {
            acc++;
            total += acc;
            return acc;
        }else {
            return acc = 0;
        }
    }, 0);

    console.log(total);
    return total;
}

solution([1,0,1,1,1,0,0,1,1,0]);    // 10