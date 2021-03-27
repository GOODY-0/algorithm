function divisibleSumPairs(n, k, ar) {

    let count = 0;
    let idx = 0;

    while(idx < n) {

        for(let i = (idx + 1); i < n; i++) {
            if((ar[idx] + ar[i]) % k === 0) count++;
        }
        idx++;
    }

    console.log(count);
}

const n1 = 6;
const k1 = 3;
const ar1 = [1, 3, 2, 6, 1, 6];

divisibleSumPairs(n1, k1, ar1);