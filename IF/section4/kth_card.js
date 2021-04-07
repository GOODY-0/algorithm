const solution = (k, cards) => {
    cards.sort((a,b) => b - a);
    const sums = [];
    for(let i = 0; i < cards.length; i++) {
        for(let j = i+1; j < cards.length; j++) {
            for(let k = j+1; k < cards.length; k++) {
                sums.push(cards[i] + cards[j] + cards[k]);
            }
        }
    }

    sums.sort((a,b) => b-a);
    const sumSet = new Set(sums);
    const sumArr = Array.from(sumSet);
    console.log(sumArr[k-1]);
    return sumArr[k-1];
}

solution(10, [13, 15, 34 ,23, 45, 65, 33, 11, 26, 42]);




