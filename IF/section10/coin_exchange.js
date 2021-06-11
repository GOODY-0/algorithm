const solution = (coinKind, exchange) => {
	let answer = 0;
	const dy = Array.from({ length: exchange + 1 }, () => 1000);
	dy[0] = 0;

	for (let i = 1; i <= coinKind.length; i++) {
		for (let j = coinKind[i]; j <= exchange; j++) {
			dy[j] = Math.min(dy[j], dy[j - coinKind[i]] + 1);
		}
	}
	answer = dy[exchange];
	console.log(answer);
	return answer;
};

solution([1, 2, 5], 15); // 3
