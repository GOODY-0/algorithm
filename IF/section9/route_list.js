const solution = (nodeCnt, linkInfo) => {
	let answer = 0;
	const list = Array.from(Array(nodeCnt + 1), () => []);
	const check = Array(nodeCnt + 1).fill(0);
	for (let [a, b] of linkInfo) list[a].push(b);
	const path = [];

	const DFS = (v) => {
		if (v === nodeCnt) {
			answer++;
			console.log(path);
		} else {
			for (let i = 0; i < list[v].length; i++) {
				if (check[list[v][i]] === 0) {
					check[list[v][i]] = 1;
					path.push(list[v][i]);
					DFS(list[v][i]);
					check[list[v][i]] = 0;
					path.pop();
				}
			}
		}
	};
	check[1] = 1;
	path.push(1);
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
