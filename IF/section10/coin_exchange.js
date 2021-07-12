const solution = (coinKind, exchange) => {
	let answer = 0;
	const dy = Array.from({ length: exchange + 1 }, () => exchange + 1);

	dy[0] = 0;
	for (let i = 0; i < coinKind.length; i++) {
		for (let j = coinKind[i]; j <= exchange; j++) {
			dy[j] = Math.min(dy[j], dy[j - coinKind[i]] + 1);
		}
	}

	answer = dy[exchange];
	console.log(dy, answer);
	return answer;
};

solution([1, 2, 5], 15); // 3
solution([10, 20, 30], 200); // 7
solution([1, 3, 5], 7); // 3
