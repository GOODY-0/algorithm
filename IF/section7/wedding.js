const solution = (arr) => {
    const answer = [];
    const visitRecord = [];
    let counter = 0;

    arr.sort((a,b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    });

    const people = arr.flat();
    for(let i = 0; i < people.length; i++) {
        if(i % 2 === 0) visitRecord.push([people[i],'s']);
        else visitRecord.push([people[i], 'e']);
    }

    visitRecord.sort((a,b) => a[0]-b[0]);
    visitRecord.forEach((record) => {
        if(record[1] === 's') {
            counter++;
            answer.push(counter);
        }
        else {
            counter--;
            answer.push(counter);
        }
    })
const max = Math.max(...answer);
    return max;
    
}

solution([[14,18], [12,15], [15, 20], [20, 30], [5, 14]]);
solution([[14,18], [12,15], [15, 20], [20, 30], [5, 14], [21, 24], [22, 23], [1,29], [2,3]]);