function solution(n, m) {
    var answer = [];
    const bigNum = Math.max(n,m);
    const smallNum = Math.min(n,m);
    const divisor = [];
    
    for(let i = 1; i < bigNum; i++) {
        if(bigNum % i === 0 && smallNum % i === 0) divisor.push(i);
    }
    
    const biggestDivisor = divisor[divisor.length-1];
    const divisor1 = bigNum/biggestDivisor;
    const divisor2 = smallNum/biggestDivisor;
    
    const smallestMultiple = biggestDivisor * divisor1 * divisor2;
    answer = [biggestDivisor, smallestMultiple]
    return answer;
}