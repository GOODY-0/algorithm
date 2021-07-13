const solution = (maxTime, problems) => {
	let answer = 0;
	const dy = Array.from({ length: maxTime + 1 }, () => 0);
	let max = 0;
	const list = [];
	dy[0] = 0; // 0분이 주어지면 0문제 풀수있고 0점 획득
	for (let i = 0; i < problems.length; i++) {
		for (let j = maxTime; j >= problems[i][1]; j--) {
			// 이미 푼 문제를 또 풀지 않도록 뒤에서부터 순회
			dy[j] = Math.max(dy[j], dy[j - problems[i][1]] + problems[i][0]);
			if (dy[j] > max) {
				max = dy[j];
				list.push(problems[i]);
			}
		}
	}

	const newList = [];
	let stack = 0;
	for (let x of list) {
		if (stack + x[1] <= maxTime) {
			newList.push(x);
			stack += x[1];
		}
	}

	console.log(newList);
	answer = dy[maxTime];
	return answer;
};

solution(20, [
	[10, 5], //	[score, time]
	[25, 12],
	[15, 8],
	[6, 3],
	[7, 4],
]);
