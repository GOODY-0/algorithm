function solution(answers) {
    let answer = [0, 0, 0];
    let result = [];
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let idx = 0;

    for (let i = 0; i < answers.length; i++) {
        let idx1 = idx%5;
        let idx2 = idx%8;
        let idx3 = idx%10;

        if (student1[idx1] === answers[i]) {
            answer[0]++;
        } 

        if (student2[idx2] === answers[i]) {
            answer[1]++;
        } 
   
        if (student3[idx3] === answers[i]) {
            answer[2]++;
        } 
        idx++;
    }

    const maxCount = Math.max(answer[0], answer[1], answer[2]);
    
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === maxCount) {
            result.push(i+1); 
        }
    }
    return result;
}



const answers = [1,2,3,3,2,3,4,5,2,1,3,4,5,2,1,2,3,4,2,3,5,5,2,3,1,5,2,3,1,5,2,1,2,3,2,2,3,4,2,2,3,4,5,4,5,1,2,3,4,5];



console.log(solution(answers));