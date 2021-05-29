const solution = (person, cow) => {
	let answer = 1;
	const jump = [1, -1, 5];
	const queue = [];
	let count = 0;
	const threes = [3];
	if (person === cow) return 1;
	while (threes[threes.length - 1] < 10001) {
		threes.push(threes[threes.length - 1] * 3);
	}

	queue.push(person);
	while (queue.length) {
		const curPos = queue.shift();
		if (curPos === cow) break;
		count++;
		if (threes.indexOf(count) !== -1) answer++;
		for (let j of jump) {
			queue.push(curPos + j);
			if (curPos + j === cow) return answer;
		}
	}
};

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5

// [6, 4, 10]  -> curPos = 6 -> [4, 10, 7, 5, 11] -> curPos = 4 -> [10, 7, 5, 11, 5, 3, 9] ->
//curPos = 10 -> [7, 5, 11, 5, 3, 9, 11, 9, 15] -> curPos = 7 -> [5, 11, 5, 3 ,9 ,11 ,9 ,15 ,8, 6, 12] -> curPos = 5
// 6 4 10 까지는 count가 3 일 때 answer++, 7 5 11 5 3 9 11 9 15 까지는 count가 9일 때 answer++
