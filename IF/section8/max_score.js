const solution = (timeLimit, problemInfo) => {
	let answer;
	let maxSumScore = 0;

	const DFS = (depth, sumScore, sumTime) => {
		if (sumTime > timeLimit) return;
		if (depth === problemInfo.length) {
			maxSumScore = sumScore > maxSumScore ? sumScore : maxSumScore;
		} else {
			DFS(depth + 1, sumScore + problemInfo[depth][0], sumTime + problemInfo[depth][1]);
			DFS(depth + 1, sumScore, sumTime);
		}
	};

	DFS(0, 0, 0);
	answer = maxSumScore;
	return answer;
};

solution(20, [
	[5, 20], // 문제의 점수, 푸는데 걸리는 시간
	[10, 5],
	[25, 12],
	[15, 8],
	[6, 3],
	[7, 4],
]);
