const solution = (N) => {
	let answer = 0;

	const DFS = (L) => {
		if (L > N) return;
		if (L === N) answer++;
		else {
			DFS(L + 1);
			DFS(L + 2);
		}
	};

	DFS(-1);
	console.log(answer);
	return answer;
};

solution(7); // 34
