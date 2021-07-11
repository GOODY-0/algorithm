const solution = (coinKind, exchange) => {
	let answer = 0;
	coinKind.sort((a, b) => b - a);
	const dy = Array.from({ length: coinKind.length }, () => 0);
	const coins = [];

	for (let i = 0; i < coinKind.length; i++) {
		while (exchange >= coinKind[i]) {
			exchange -= coinKind[i];
			coins.push(coinKind[i]);
			answer++;
		}
		if (exchange === 0) break;
	}

	console.log(coins, answer);
	return answer;
};

solution([1, 2, 5], 15); // 3
solution([10, 20, 30], 200); // 7
solution([1, 3, 5], 7); // 3
