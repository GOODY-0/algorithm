const solution = (nodeCnt, linkInfo) => {
	let answer = 0;
	const matrix = Array.from(Array(nodeCnt + 1), () => Array(nodeCnt + 1).fill(0));
	const check = Array.from({ length: nodeCnt + 1 }, () => 0);
	let path = [];

	const DFS = (L) => {
		if (L === nodeCnt) {
			answer++;
			console.log(path);
		} else {
			for (let i = 1; i <= nodeCnt; i++) {
				if (matrix[L][i] && check[i] === 0) {
					check[i] = 1;
					path.push(i);
					DFS(i);
					check[i] = 0;
					path.pop();
				}
			}
		}
	};

	for (let i = 0; i < linkInfo.length; i++) {
		matrix[linkInfo[i][0]][linkInfo[i][1]] = 1;
	}
	path.push(1);
	check[1] = 1;
	DFS(1);
	console.log(answer);
	return answer;
};

solution(5, [
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 1],
	[2, 3],
	[2, 5],
	[3, 4],
	[4, 2],
	[4, 5],
]);
