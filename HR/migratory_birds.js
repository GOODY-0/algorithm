function migratoryBirds(arr) {
    let birds = [0, 0, 0, 0, 0];

    arr.forEach((e) => {
        if(e === 1) birds[0]++;
        if(e === 2) birds[1]++;
        if(e === 3) birds[2]++;
        if(e === 4) birds[3]++;
        if(e === 5) birds[4]++;
    });

    const max = birds.reduce((a,b) => Math.max(a,b));
    const maxBirdId = birds.indexOf(max) + 1;
    console.log(maxBirdId);
}

const arr1 = [1,4,4,4,5,3];
const arr2 = [1,1,2,2,3];
const arr3 = [1,2,3,4,5,4,3,2,1,3,4];

migratoryBirds(arr2);
