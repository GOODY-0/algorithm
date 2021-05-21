const solution = (n, f) => {
	const memo = Array.from(Array(11), () => Array(11).fill(0));
	let answer = 0;
	let flag = 0;
	const p = [];
	const b = [];

	const check = Array(n + 1).fill(0);

	const combi = (n, r) => {
		if (memo[n][r] > 0) return memo[n][r];
		if (r === 0 || n === r) return 1;
		else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
	};

	const DFS = (L, sum) => {
		if (flag) return;
		if (L === n && sum === f) {
			answer = p.slice();
			flag = 1;
		} else {
			for (let i = 1; i <= n; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					p[L] = i;
					DFS(L + 1, sum + b[L] * p[L]);
					check[i] = 0;
				}
			}
		}
	};

	for (let i = 0; i < n; i++) b[i] = combi(n - 1, i);

	DFS(0, 0);
	console.log(answer);
};

solution(4, 16); // 3 1 2 4
