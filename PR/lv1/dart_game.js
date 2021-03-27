// function solution(dartResult) {
//     let answer = 0;
//     let game1 = [];
//     let game2 = [];
//     let game3 = [];
//     let dividerCount = 0;

//     const tempArr = dartResult.split("");
//     const tempArrCopy = tempArr;
//     for (let i = 0; i < dartResult.length; i++) {
//         if (i !== 0 && Number(dartResult[i]) >= 0 && dividerCount < 3) {
//             if (dividerCount < 1) {
//                 tempArrCopy.splice(i, 0, ",");
//                 dividerCount++;
//             } else {
//                 tempArrCopy.splice(i+1,0,",");
//             }
//         }   //쉼표는  i 는 0이 아니고 2번까지만 깔 수 있음
//     }
//     const splitedArr = tempArrCopy.split("");
//     console.log(splitedArr);
//     return answer;
// }

function solution(dartResult) {
    let stack = [];
    let temp = 0;



    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0) {
            if (Number(dartResult[i]) === 1 && Number(dartResult[i + 1]) === 0) {
                temp = 10;
                i++;
            } else {
                temp = dartResult[i];
            }
        } else if (dartResult[i] === "S") {
            stack.push(temp);
        } else if (dartResult[i] === "D") {
            stack.push(temp**2);
        } else if (dartResult[i] === "T") {
            stack.push(temp**3);
        } else if (dartResult[i] === "#") {
            stack[stack.length-1] *= -1; 
        } else if (dartResult[i] === "*") {
            stack[stack.length-1] *= 2;
            stack[stack.length-2] *= 2;
        }
    }



    let answer = stack.reduce((acc,cur) => acc += Number(cur), 0);
    console.log(answer);



    return answer;
}

solution("1S2D*3T");        // 37           
solution("1D2S#10S");       // 9
solution("1D2S0T");         // 3
solution("1S*2T*3S");       // 23
solution("1D#2S*3S");       // 5
solution("1T2D3D#");        // -4
solution("1D2S3T*");        // 59