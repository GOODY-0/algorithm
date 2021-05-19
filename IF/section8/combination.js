const solution = (n, m) => {
	const answer = [];
	const temp = [];
	const check = Array(m);
	check.fill(0);

	const DFS = (n, L) => {
		if (L === m) {
			answer.push([...temp]);
		} else {
			for (let i = 1; i <= n; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					temp[L] = i;
					DFS(n, L + 1);
					check[i] = 0;
				}
			}
		}
	};
	DFS(n, 0);
	console.log(answer);
};

solution(4, 2);
