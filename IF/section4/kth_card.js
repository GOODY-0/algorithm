const solution = (k, cards) => {
	let temp = new Set();

	for (let i = 0; i < cards.length; i++) {
		for (let j = i + 1; j < cards.length; j++) {
			for (let s = j + 1; s < cards.length; s++) {
				temp.add(cards[i] + cards[j] + cards[s]);
			}
		}
	}

	const arr = Array.from(temp).sort((a, b) => b - a);
	const answer = arr[k - 1];
	console.log(answer);
};

solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
