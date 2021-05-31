const solution = (N, island) => {
	let count = 0;
	const dx = [0, 1, 1, 1, 0, -1, -1, -1];
	const dy = [1, 1, 0, -1, -1, -1, 0, 1];
	const DFS = (x, y) => {
		if () {       // 깊이 탐색이 끝나는 조건과 다른 섬으로 점프하는 방법에 대해 고민해보자.
		} else {
			for (let i = 0; i < dx.length; i++) {
				const nx = x + dx[i];
				const ny = x + dy[i];
				if (nx >= 0 && nx < N && ny >= 0 && ny < N && island[nx][ny] === 1) {
					island[nx][ny] = 0;
					DFS(nx, ny);
					island[nx][ny] = 1;
				}
			}
		}
	};

	DFS(0, 0);
};

solution(7, [
	[1, 1, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 1, 0],
	[0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 1, 0, 0],
	[1, 0, 1, 0, 1, 0, 0],
]);
