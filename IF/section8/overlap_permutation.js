const solution = (N, count) => {
	let answer = [];
	let temp = new Array(count);
	temp.fill(1);

	const DFS = (depth) => {
		if (depth === count) answer.push([...temp]);
		else {
			for (let i = 1; i <= N; i++) {
				temp[depth] = i;
				DFS(depth + 1);
			}
		}
	};

	DFS(0);
	console.log(answer);
	return answer;
};
solution(3, 3); // 1부터 3까지 적힌 구슬 중 2개 뽑는 경우의 수 (중복허용)
