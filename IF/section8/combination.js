const solution = (N, M) => {
	const temp = Array.from({ length: M }, () => 0);
	const answer = [];
	const DFS = (L, S) => {
		if (L === M) answer.push([...temp]);
		else {
			for (let i = S; i <= N; i++) {
				temp[L] = i;
				DFS(L + 1, i + 1);
			}
		}
	};
	DFS(0, 1);
	console.log(answer);
};

solution(4, 2);
