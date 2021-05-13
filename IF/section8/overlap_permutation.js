const solution = (N, count) => {
	let answer = [];
	let temp = new Array(count);
	temp.fill(0);

	const DFS = (depth) => {
		if (depth === N) console.log(answer.length);
		else {
			const d = temp.slice();
			for (let i = 1; i <= N; i++) {
				d[depth] = i;
				answer.push(d);
			}
			DFS(depth + 1);
		}
	};

	DFS(1);
	console.log(answer);
	return answer;
};
solution(3, 2); // 1부터 3까지 적힌 구슬 중 2개 뽑는 경우의 수 (중복허용)
