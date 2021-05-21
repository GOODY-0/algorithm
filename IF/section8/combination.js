const solution = (n, m) => {
	const answer = [];
	const temp = [];

	const DFS = (L, S) => {
		if (L === m) answer.push([...temp]);
		else {
			for (let i = S; i <= n; i++) {
				temp[L] = i;
				DFS(L + 1, i + 1);
			}
		}
	};

	DFS(0, 1);
	console.log(answer);
};

solution(4, 2);
