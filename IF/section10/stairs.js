const solution = N => {
	let answer = 0;
	const DFS = L => {
		if (L > N) return;
		if (L === N) {
			answer++;
		} else {
			DFS(L + 1);
			DFS(L + 2);
		}
	};

	DFS(0);
	return answer;
};

solution(4);
solution(8);
