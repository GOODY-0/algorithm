const solution = (nodeCnt, linkInfo) => {
	let answer = 0;
	const matrix = Array.from(Array(nodeCnt + 1), () => Array(nodeCnt + 1).fill(0));

	const DFS = (L, currNode) => {
		if (L === nodeCnt && currNode === nodeCnt) {
			answer++;
		} else {
			for (let i = 1; i <= matrix[L].length; i++) {
				if (matrix[L][i] && i > L) DFS(L + 1, i);
			}
		}
	};

	for (let i = 0; i < linkInfo.length; i++) {
		matrix[linkInfo[i][0]][linkInfo[i][1]] = 1;
	}
	DFS(1, 1);
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
