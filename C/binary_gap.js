function solution(N) {
	// write your code in JavaScript (Node.js 8.9.4)
	let answer = 0;
	const binary = N.toString(2);
	let gap = 0;
	let max = 0;
	const str = Array.from(binary + "");
	str.forEach(el => {
		if (el === "1") {
			max = gap > max ? gap : max;
			gap = 0;
		} else if (el === "0") {
			gap++;
		}
	});

	answer = max;
	return answer;
}
