function solution(board, moves) {
    let answer = 0;
    const basket = [];

    moves.forEach((move) => {
        
        for(let i = 0; i < board.length; i++) {
            if(board[i][move-1] !== 0){
                basket.push(board[i][move-1]);
                if(basket.length !== 0 && basket[basket.length-1] === basket[basket.length-2]) {
                    basket.pop();
                    basket.pop();
                    answer+=2;
                }
                board[i][move-1] = 0;
                break;
            } 
        }
    })

    
 
    console.log(answer);


    return answer;
}



/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡtest casesㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/

const board1 = [
    [0, 0, 0, 0, 0],        // moves가 1이면 board[i] 를  [0] 이 0이 아닐 때 까지 돈다.  
    [0, 0, 1, 0, 3],        //         2이면      ""      [1] 이           ""
    [0, 2, 5, 0, 1],        
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]];       

const board2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]];

const board3 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]];



const board4 = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 2, 1, 0, 0],
    [0, 2, 1, 0, 0],
    [0, 2, 1, 0, 0]];


const board5 = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 12, 1, 0, 0],
    [12, 2, 1, 11, 0],
    [0, 2, 1, 0, 12]];

const moves1 = [1, 5, 3, 5, 1, 2, 1, 4];
const moves2 = [1, 5, 3, 5, 1, 2, 5, 1, 4, 3];
const moves3 = [1, 2, 3, 3, 2, 3, 1];
/*
const boardSkeleton =  [[board1[board1.length-5][0], board1[board1.length-5][1], board1[board1.length-5][2], board1[board1.length-5][3], board1[board1.length-5][4],
                        [board1[board1.length-4][0], board1[board1.length-4][1], board1[board1.length-4][2], board1[board1.length-4][3], board1[board1.length-4][4],
                        [board1[board1.length-3][0], board1[board1.length-3][1], board1[board1.length-3][2], board1[board1.length-3][3], board1[board1.length-3][4],
                        [board1[board1.length-2][0], board1[board1.length-2][1], board1[board1.length-2][2], board1[board1.length-2][3], board1[board1.length-2][4],
                        [board1[board1.length-1][0], board1[board1.length-1][1], board1[board1.length-1][2], board1[board1.length-1][3], board1[board1.length-1][4]]]]]]];


*/


solution(board1, moves1);







// function checkBasket(basket) {
//     let score = 0;
//     for (let j = 0; j < basket.length; j++) {
//         for (let i = 0; i < basket.length; i++) {
//             if (basket[i] !== null && basket[i] === basket[i + 1]) {
//                 basket.splice(i, 2);
//                 score += 2;
//             }
//         }
//     }

//     return score;
// }


// function moveDolls(board, col) {     // board1의 col 열의 맨 위 인형 basket으로 옮김.
//     let basket = []
//     for (let i = 0; i < board.length; i++) {
//         if (board[i][col] !== 0) {
//             basket.push(board[i][col]);
//             board[i][col] = 0;
//             break;
//         }
//     }
//     return basket;
// }