const solution = (maxTime, problems) => {
	// Precondition Q :
	// 10 <= maxTime <= 300      1 <= problems.length <= 20
	let answer = 0;
	const dy = Array.from({ length: maxTime + 1 }, () => 0);
	dy[0] = 0;

	for (let i = 0; i < problems.length; i++) {
		const score = problems[i][0]; // Invariant P:
		const time = problems[i][1]; // sum of [time1, time2, ...] <= maxTime
		for (let j = maxTime; j >= time; j--) {
			dy[j] = Math.max(dy[j], dy[j - time] + score);
		}
	}

	// PostCondition R :
	// i === problems.length && sum of [time1, time2, ...] <= maxTime implies R
	answer = dy[maxTime]; // 41
	console.log(dy);
	return answer;
};

solution(20, [
	[10, 5], //	[score, time]
	[25, 12],
	[15, 8],
	[6, 3],
	[7, 4],
]);

// dy = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
