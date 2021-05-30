const solution = (person, cow) => {
	const queue = [];
	const ch = Array(10001).fill(0);
	let L = 0;
	ch[person] = 1;
	queue.push(person);
	while (queue.length) {
		let length = queue.length;
		for (let i = 0; i < length; i++) {
			const curPos = queue.shift();
			for (let nxPos of [curPos - 1, curPos + 1, curPos + 5]) {
				if (nxPos === cow) return L + 1;
				if (ch[nxPos] === 0 && nxPos > 0 && nxPos < 10001) {
					ch[nxPos] = 1;
					queue.push(nxPos);
				}
			}
		}
		L++;
	}
};

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5

// [6, 4, 10]  -> curPos = 6 -> [4, 10, 7, 5, 11] -> curPos = 4 -> [10, 7, 5, 11, 5, 3, 9] ->
//curPos = 10 -> [7, 5, 11, 5, 3, 9, 11, 9, 15] -> curPos = 7 -> [5, 11, 5, 3 ,9 ,11 ,9 ,15 ,8, 6, 12] -> curPos = 5
// 6 4 10 까지는 count가 3 일 때 answer++, 7 5 11 5 3 9 11 9 15 까지는 count가 9일 때 answer++
