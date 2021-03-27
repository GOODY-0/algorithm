function solution(n) {
    var answer = 0;
    let t = n.toString(3);
    const tArray = Array.from(t);
    const tArrayReverse = tArray.reverse(); 
    // const reversedT = tArrayReverse.join("")
    
    const sum = tArrayReverse.reduce((acc, cur, idx, arr) => {
        return acc += 3**((arr.length-1)-idx) * cur;
    }, 0)

    console.log(sum);

    
    return answer;
}

solution(45)        // 7
solution(125)       // 229
