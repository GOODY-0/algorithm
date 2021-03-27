// s = an array of integers, the numbers on each of the squares of chocolate
// d = an integer, Ron's birthday
// m = an integer, Ron's birthMonth
// s 배열 내에서 인접한 m개의 원소끼리 더했을 때 d가 될 수 있는 경우의 수를 반환하라. 
function birthday(s, d, m) {
    let count = 0;

    while(s.length > 0) {

        let sum = 0;
        for(let i = 0; i < m; i++) {
            sum += s[i];
        }
        s.shift();

        if(sum === d) count++;
        
    }
    console.log(count);
}

const s1 = [1,2,1,3,2];
const d1 = 3;
const m1 = 2;

const s2 = [1,1,1,1,1];
const d2 = 3;
const m2 = 2;

const s3 = [4];
const d3 = 4;
const m3 = 1;

birthday(s3,d3,m3);