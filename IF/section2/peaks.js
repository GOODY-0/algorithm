const solution = (board) => {
    let peaks = 0;

    board.forEach((el) => {
        el.unshift(0);
        el.push(0);
    });
    board.push(new Array(board.length+2).fill(0));
    board.unshift(new Array(board.length+2).fill(0));
    

    for(let i = 1; i < board.length-1; i++) {
        for(let j = 1; j < board.length-1; j++) {
            const curr = board[i][j];
            if(curr > board[i-1][j] && curr > board[i][j-1] && curr > board[i+1][j] && curr > board[i][j+1]) peaks++;
        }
    }
    console.log(peaks);
    return peaks;
}

const board = [
              [5,3,7,2,3],
              [3,7,1,6,1],
              [7,2,5,3,4],
              [4,3,6,4,1],
              [8,7,3,5,2]
              ];        // 10
solution(board);