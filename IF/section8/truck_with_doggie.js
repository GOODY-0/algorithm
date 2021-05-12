const solution = (limit, doggiees) => {
	let answer;
	const check = new Array(doggiees.length);
	check.fill(1);
	const answerList = [];
	const DFS = (depth) => {
		if (depth === doggiees.length + 1) {
			let sum = 0;
			for (let i = 0; i < check.length; i++) {
				if (check[i] && sum + doggiees[i] <= limit) sum += doggiees[i];
			}
			answerList.push(sum);
		} else {
			check[depth] = 1;
			DFS(depth + 1);
			check[depth] = 0;
			DFS(depth + 1);
		}
	};

	DFS(0);
	answer = Math.max(...answerList);
	return answer;
};

// const solution = (limit, doggies) => {
// 	doggies.sort((a, b) => a - b);
// 	// console.log(doggies);

// 	while (true) {
// 		const sum = doggies.reduce((acc, cur) => acc + cur, 0);
// 		if (sum > limit) doggies.shift();
// 		else {
// 			return sum;
// 		}
// 	}
// };

console.log(solution(259, [81, 58, 42, 33, 61])); // 242
