const solution = (num) => {
	let answer = 0;

	const DFS = (n) => {
		if (n === 1) return 1;
		else {
			return n * DFS(n - 1);
		}
	};

	answer = DFS(num);
	console.log(answer);
};

solution(5);
