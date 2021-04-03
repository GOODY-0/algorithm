function solution(p1, p2) {
    let result = '';

    for(let i = 0; i < p1.length; i++) {
        if(p1[i] === p2[i]) result += 'D';
        else if (p1[i] > p2[i]) {
            if(p1[i] === 3 && p2[i] === 1) result += "B";
            else result += "A";
        }
        else if (p2[i] > p1[i]) {
            if(p2[i] === 3 && p1[i] === 1) result += "A";
            else result += "B";
        }
    }

    console.log(result);
    return result;
}

solution([2,3,3,1,3], [1,1,2,2,3]);     // ABABD
// 1: scissors 2: rock 3: paper
// 1 > 3
// 2 > 1
// 3 > 2