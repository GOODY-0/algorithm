const solution = (maze) => {
	let answer = 0;
	const dx = [-1, 0, 1, 0];
	const dy = [0, 1, 0, -1];

	const DFS = (x, y) => {
		if (x === maze.length - 1 && y === maze.length - 1) {
			answer++;
		} else {
			for (let i = 0; i < 4; i++) {
				let nx = dx[i] + x;
				let ny = dy[i] + y;
				if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && maze[nx][ny] === 0) {
					maze[nx][ny] = 1;
					DFS(nx, ny);
					maze[nx][ny] = 0;
				}
			}
		}
	};

	maze[0][0] = 1;
	DFS(0, 0);
	console.log(answer);
	return answer;
};

solution([
	[0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0],
	[1, 1, 0, 1, 0, 1, 1],
	[1, 1, 0, 0, 0, 0, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 0, 0, 0],
]);
