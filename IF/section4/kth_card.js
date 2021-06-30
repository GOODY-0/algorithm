const solution = (k, cards) => {
	let count = 1;
	cards = cards.sort((a, b) => b - a);
	let answer;

	for (let i = 0; i < cards.length; i++) {
		for (let j = i + 1; j < cards.length; j++) {
			for (let s = j + 1; s < cards.length; s++) {
				let sum = 0;
				if (count === k) {
					sum = cards[i] + cards[j] + cards[s];
					answer = sum;
				}
				count++;
			}
		}
	}
	console.log(answer);
};

solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
