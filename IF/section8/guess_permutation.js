const solution = (n, f) => {
	let answer = [];
	const temp = [];
	const check = new Array(n).fill(0);
	const combiArr = [];
	const permuArr = [];
	let flag = 0;
	const memo = Array.from(Array(11), () => Array(11).fill(0));
	const combi = (n, r) => {
		if (memo[n][r]) return memo[n][r];
		if (n === r || r === 0) return 1;
		else {
			return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
		}
	};

	const DFS = (L, sum) => {
		if (flag) return;
		if (L === n && sum === f) {
			answer = [...permuArr];
			flag = 1;
		} else {
			for (let i = 0; i < n; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					permuArr[L] = i + 1;
					DFS(L + 1, sum + permuArr[L] * combiArr[L]);
					check[i] = 0;
				}
			}
		}
	};

	for (let i = 0; i < n; i++) combiArr[i] = combi(n - 1, i);

	DFS(0, 0);
	console.log(answer);
};

solution(4, 16); // 3 1 2 4

// 3C0 3C1 3C2 3C3 * permutation
