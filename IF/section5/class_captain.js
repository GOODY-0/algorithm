const solution = (votes) => {
    const arr = votes.split("");
    let max = 0;
    let captatin = '';
    const candidates = {};

    arr.forEach((el) => {
        if(candidates[el]) candidates[el]++;
        else candidates[el] = 1;
        
    });

    for(let student in candidates) {
        if(candidates[student] > max) {
            max = candidates[student];
            captatin = student;
        }
    }

    console.log(captatin);
    return captatin;
}

solution("BACBACCACCBDEDE");