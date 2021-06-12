function solution(n) {
	let answer = Array.from({ length: n }, () => Array.from({ length: n + 1 }));
	let count = 0;
	let x = -1,
		y = 0;
	while (n > 0) {
		for (let i = 0; i < n; i++) answer[++x][y] = ++count;
		for (let i = 0; i < n - 1; i++) answer[x][++y] = ++count;
		for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++count;
		n -= 3;
	}

	const d = [];
	for (let i = 0; i < answer.length; i++) {
		for (let j = 0; j < answer[i].length; j++) {
			if (answer[i][j]) d.push(answer[i][j]);
		}
	}
	return d;
}
