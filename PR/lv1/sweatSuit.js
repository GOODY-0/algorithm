function solution(n, lost, reserve) {
	let answer = n - lost.length;

	reserve.forEach((student, idx, arr) => {
		const sNum = lost.indexOf(student);
		if (sNum !== -1) {
			lost[sNum] = 0;
			arr[idx] = 0;
			answer++;
		}
	});

	for (let i = 0; i < reserve.length; i++) {
		for (let j = 0; j < lost.length; j++) {
			if (!lost[j] || !reserve[i]) continue;
			if (lost[j] === reserve[i] + 1 || lost[j] === reserve[i] - 1) {
				reserve[i] = 0;
				lost[j] = 0;
				answer++;
			}
		}
	}

	return answer;
}

solution(5, [2, 4], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], [1]); // 2
solution(2, [2], [3]); // 2
solution(7, [3, 7], [1, 3, 5]);
solution(5, [1, 2, 3, 4, 5], [3]);
solution(5, [1, 2, 3, 4, 5], [3, 4]);
solution(5, [2, 3, 6, 9], [3, 6, 12, 9]);

// console.log(lost, reserve);
