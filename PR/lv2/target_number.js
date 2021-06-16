function solution(numbers, target) {
	var answer = 0;
	// const ch = Array.from({length: numbers.length}, ()=>0);

	const DFS = (L, sum) => {
		if (L === numbers.length) {
			if (sum === target) {
				answer++;
			}

			return;
		}

		DFS(L + 1, sum + numbers[L]);
		DFS(L + 1, sum - numbers[L]);
	};

	DFS(0, 0);
	return answer;
}
