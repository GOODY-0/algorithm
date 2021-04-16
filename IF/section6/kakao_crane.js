const solution = (board, moves) => {
    const bucket = [];
    let count = 0;
    moves.forEach((move) => {
        for(let i = 0; i < board.length; i++) {
            let block = board[i][move-1];
            if(block) {
                bucket.push(block);
                if(bucket[bucket.length-1] === bucket[bucket.length-2]) {
                    bucket.pop();
                    bucket.pop();
                    count+=2;
                }
                board[i][move-1] = 0;
                break;
            }
        }

    })

    console.log(bucket, count);
}

const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
const moves = [1,5,3,5,1,2,1,4];
solution(board, moves);     //4 