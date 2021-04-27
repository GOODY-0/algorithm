const solution = (conf) => {
    let answer = 0;
    conf.sort((a,b) => {
        if(a[1] === b[1]) return a[0] - b[0]; 
        else return a[1] - b[1];
    });
    let et = 0;
    for (let x of conf) {
        if(x[0] >= et) {
            answer++;
            et = x[1];
        }
    }

    console.log(answer);
};


solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]); // 3  [2,3], [3,5], [5, 7] 이 회의실을 이용할 수 있다.
// solution([3, 3], [1, 3], [2, 3]); // 2
