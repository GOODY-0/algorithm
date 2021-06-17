const solution = (N, M) => {
	const tmp = Array.from({ length: M }, () => 0);
	// let temp = [];
	const answer = [];
	const DFS = L => {
		if (L === M) {
			answer.push([...tmp]);
		} else {
			for (let i = 1; i <= N; i++) {
				tmp[L] = i;
				DFS(L + 1);
			}
		}
	};

	DFS(0);
	console.log(answer);
};

solution(3, 2);
