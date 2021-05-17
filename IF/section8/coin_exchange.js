const solution = (coninTypes, amount) => {
	let answer = Number.MAX_SAFE_INTEGER;
	const DFS = (depth, sum) => {
		if (sum > amount) return;
		if (depth >= answer) return;
		if (sum === amount) {
			answer = depth;
			return;
		} else {
			for (let i = 0; i < coninTypes.length; i++) {
				DFS(depth + 1, sum + coninTypes[i]);
			}
		}
	};

	DFS(0, 0);
	console.log(answer);
	return answer;
};

solution([1, 2, 5], 15); // 3
// 1, 2, 5 로 15를 만들 수 있는 모든 경우의 수 ( 각 숫자는 무한정 재활용 가능) 중에서 가장 숫자의 개수가 적은 것..
// 1 * 15
// 2 * 7 + 1 * 1
//
