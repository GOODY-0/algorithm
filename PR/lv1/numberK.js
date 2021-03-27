function solution (array, commands) {
    let answer = [];


    for(let i = 0; i < commands.length; i++) {
        let start = commands[i][0]-1;           //array[i], command[i] 고려해서 리팩토링
        let end = commands[i][1]; 
        let pick = commands[i][2]-1;
    
        let newArray = array.slice(start, end);
        newArray.sort(function(a,b) {
            return a-b;
        });
        answer.push(newArray[pick]);
    }

        console.log(answer);
    
    return answer;
}


const array1 = [1,5,2,6,3,7,4];
const command1 = [[2,5,3],[4,4,1],[1,7,3]];

solution(array1, command1);


// for(let i = 0; i < commands.length; i++) {
//     let start = commands[i][0]-1;           //array[i], command[i] 고려해서 리팩토링
//     let end = commands[i][1]; 
//     let pick = commands[i][2]-1;

//     let newArray = array.slice(start, end);
//     newArray.sort();
//     answer.push(newArray[pick]);
// }