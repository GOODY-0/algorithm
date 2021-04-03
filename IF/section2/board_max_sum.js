const solution = (board) => {
    const sumStack = [];
    
    crossSumStack = 0;
    
    for(let i = 0; i < board.length; i++) {
        let rowSum = 0;
        let colSum = 0;
        let crossSum = 0;
        for(let j = 0; j < board.length; j++) {
            rowSum += board[i][j];
            colSum += board[j][i];
            if(crossSumStack === 0) {
                crossSum += board[j][j];   
            }
            else if(crossSumStack === 1){
                crossSum += board[board.length-1-j][j];
            }
            
        }
        crossSumStack++;
        sumStack.push(rowSum);
        sumStack.push(colSum);
        sumStack.push(crossSum);
    }

    let max = 0;
    sumStack.reduce((pre, cur) => {
        if(cur > max) max = cur;
        return pre = cur;
    });

    console.log(max);
    return max;   
}

const board = [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]];
solution(board);