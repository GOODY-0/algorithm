const solution = (test) => {
    const students = [];
    const m = test.length;
    const n = test[0].length;
    const answers = [];
    let answer = 0;

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
        
            let cnt = 0;
            for(let k = 0; k < m; k++) {
                let pi = 0;
                let pj = 0;
                for(let s = 0; s < n; s++) {
                    if(test[k][s] === i) pi = s;
                    if(test[k][s] === j) pj = s;
                }
                if(pi < pj) cnt++;
            }
            if(cnt === m) {
                answer++;
                answers.push([i, j]);
            }
        }
    }
    console.log(answers);
    return (answer);
}
const tests = [[3,4,1,2], [4,3,2,1], [3,1,4,2]];
solution(tests); 