const solution = (num) => {
	let answer = 1;

	const DFS = (n) => {
		if (n === 0) return 1;
		else {
			answer *= n;
			DFS(n - 1);
		}
	};

	DFS(num);
	console.log(answer);
};

solution(5);
