function solution(brown, yellow) {
	const sum = brown + yellow;
	var answer = [];
	const measures = [];
	for (let i = 1; i <= sum; i++) {
		if (sum % i === 0) measures.push(i);
	}

	if (measures.length % 2 !== 0) {
		answer[0] = measures[Math.floor(measures.length / 2)];
		answer[1] = measures[Math.floor(measures.length / 2)];
	} else {
		answer[0] = measures[measures.length / 2];
		answer[1] = measures[measures.length / 2 - 1];
	}

	let lp = 0;
	let rp = 0;

	while ((answer[0] - 2) * (answer[1] - 2) !== yellow) {
		lp++;
		rp++;
		answer[0] = measures[measures.length / 2 + lp];
		answer[1] = measures[measures.length / 2 - 1 - rp];
	}

	return answer;
}
console.log(solution(50, 22));
