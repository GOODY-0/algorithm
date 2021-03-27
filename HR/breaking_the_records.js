function breakingRecords(scores) {
    let careerLow = scores[0];
    let careerHigh = scores[0];
    let recordsCounter = [0, 0];

    scores.forEach((score) => {
        if(score > careerHigh) {
            careerHigh = score;
            recordsCounter[0]++;
        }

        if(score < careerLow) {
            careerLow = score;
            recordsCounter[1]++;
        }
    });

    console.log(recordsCounter[0], recordsCounter[1]);

}

const scores1 = [12, 24, 10, 24];
const scores2 = [10, 5, 20, 4, 5, 2, 25, 1];
const scores3 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

breakingRecords(scores3);