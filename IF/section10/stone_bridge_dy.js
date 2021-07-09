const solution = n => {
	let answer = 0;
	const dy = Array.from({ length: n + 1 }, () => 0);

	dy[0] = 1;
	dy[1] = 2;
	for (let i = 2; i < dy.length; i++) {
		dy[i] = dy[i - 1] + dy[i - 2];
	}

	answer = dy[n];
	console.log(answer);
	return answer;
};

solution(7); // 34
