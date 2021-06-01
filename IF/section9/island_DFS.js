const solution = (island) => {
	let count = 0;
	const N = island.length;
	const dx = [0, 1, 1, 1, 0, -1, -1, -1];
	const dy = [1, 1, 0, -1, -1, -1, 0, 1];

	const DFS = (x, y) => {
		island[x][y] = 0;
		for (let k = 0; k < 8; k++) {
			const nx = x + dx[k];
			const ny = y + dy[k];
			if (nx >= 0 && nx < N && ny >= 0 && ny < N && island[nx][ny] === 1) {
				DFS(nx, ny);
			}
		}
	};

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (island[i][j] === 1) {
				count++;
				DFS(i, j);
			}
		}
	}
	console.log(count);
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
