const solution = (n, r) => {
	let answer = 0;
	const memo = Array.from({ length: 35 }, () =>
		Array.from({ length: 35 }, () => 0)
	);

	const DFS = (n, r) => {
		if (memo[n][r]) return memo[n][r];
		if (n === r || r === 0) return 1;
		else {
			return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
		}
	};

	console.log(DFS(n, r));
	answer = memo[n][r];
	console.log(answer);
	return answer;
};
solution(5, 3);
