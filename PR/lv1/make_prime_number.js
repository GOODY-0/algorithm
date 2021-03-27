function solution(nums) {

    const combinations = getCombinations(nums, 3);
    const sumArr = combinations.map((el) => {
        return el.reduce((acc,cur) => acc += cur);
    })

    const answerArr = sumArr.filter((el) => isPrime(el));
    
    return answerArr.length;
}


function getCombinations(arr,selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);  // 해당하는 fixed 를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]);    // 돌아온 조합에 떼놓은 fixed 붙이기
        results.push(...attached);
    });

    return results;
}


function isPrime(n) {

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true; 
}


getCombinations([1,2,3,4],3);