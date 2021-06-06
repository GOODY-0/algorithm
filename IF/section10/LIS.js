const solution = (arr) => {
	const dy = Array.from({ length: arr.length }, () => 0);

	dy[0] = 1;
	for (let i = 1; i < arr.length; i++) {
		let max = 0;
		for (let j = i - 1; j >= 0; j--) {
			if (arr[i] > arr[j] && dy[j] > max) {
				max = dy[j];
			}
		}
		dy[i] = max + 1;
	}

	const answer = Math.max(...dy);
	console.log(answer);
	return answer;
};

solution([5, 3, 7, 8, 6, 2, 9, 4]); // 4
solution([2, 7, 5, 8, 6, 4, 7, 12, 3]); // 5

// arr 5 3 7 8 6 2 9 4
//  dy 1 1 2 3 2 1 4 2
