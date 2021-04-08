const solution = (test) => {
    let answer = 0;
    
    for(let i = 1; i <= test.length; i++ ){
        for(let j = 1; j <= test.length; j++) {
            let cnt = 0;
            for(let k = 0; k < test.length; k++) {
                let pi = pj = 0;
                for(let s = 0; s < test[0].length; s++) {
                    if(test[k][s] === i) pi = i;
                    if(test[k][s] === j) pj = j;
                }
                if(pi < pj) cnt++;
            }
            if(cnt === test.length) answer++;
        }
    }
    return answer;
    
}
const tests = [[3,4,1,2], [4,3,2,1], [3,1,4,2]];
solution(tests); 
