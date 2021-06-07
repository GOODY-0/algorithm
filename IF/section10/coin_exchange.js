const solution = (coinKind, exchange) => {
	let answer = 0;

	const DFS = (coinCnt, sum) => {
		if (sum > exchange) return;
		if (sum === exchange) {
			answer = coinCnt;
		} else {
			for (let i = 0; i < coinKind.length; i++) {
				DFS(coinCnt + 1, coinKind[i] + sum);
			}
		}
	};

	DFS(0, 0);
	console.log(answer);
	return answer;
};

solution([1, 2, 5], 15); // 3
