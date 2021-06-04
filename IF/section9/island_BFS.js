const solution = (board) => {
	let island = 0;
	const N = board.length;
	const dx = [0, 1, 1, 1, 0, -1, -1, -1];
	const dy = [1, 1, 0, -1, -1, -1, 0, 1];
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			const queue = [];
			if (board[i][j] === 1) {
				board[i][j] = 0;
				island++;
				queue.push([i, j]);
				while (queue.length) {
					const cur = queue.shift();
					board[cur[0]][cur[1]] = 0;
					for (let k = 0; k < 8; k++) {
						const nx = cur[0] + dx[k];
						const ny = cur[1] + dy[k];
						if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 1) {
							queue.push([nx, ny]);
						}
					}
				}
			}
		}
	}

	console.log(island);
	return island;
};

solution([
	[1, 1, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 1, 0],
	[0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 1, 0, 0],
	[1, 0, 1, 0, 1, 0, 0],
]);
