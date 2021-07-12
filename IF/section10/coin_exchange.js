const solution = (coinKind, exchange) => {
	let answer = 0;
	const dy = Array.from({ length: exchange + 1 }, () => 1000);
	const coins = [];
	dy[0] = 0;
	for (let i = 0; i < coinKind.length; i++) {
		for (let j = coinKind[i]; j <= exchange; j++) {
			dy[j] = Math.min(dy[j], dy[j - coinKind[i]] + 1);
		}
	}

	console.log(dy[exchange]);
	// console.log(coins, answer);
	return answer;
};

solution([1, 2, 5], 15); // 3
solution([10, 20, 30], 200); // 7
solution([1, 3, 5], 7); // 3
