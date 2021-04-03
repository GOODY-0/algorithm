const solution = (scores) => {
    const originScores = [...scores];
    scores.sort((a, b) => b-a);
    

    const ranks = originScores.map((el) => {
        return scores.indexOf(el)+1;
    });

    console.log(ranks);
    return ranks;
}


solution([87, 89, 92, 100, 76]);    // [4, 3, 2, 1, 5]