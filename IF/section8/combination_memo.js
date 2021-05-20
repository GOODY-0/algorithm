const solution = (n, r) => {
	const memo = Array.from(Array(35), () => Array(35).fill(0));
	const DFS = (n, r) => {
		if (memo[n][r] > 0) return memo[n][r];
		if (n === r || r === 0) {
			memo[n][r] = 1;
			return 1;
		} else {
			return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
		}
	};
	console.log(DFS(n, r));
};
solution(33, 19);
