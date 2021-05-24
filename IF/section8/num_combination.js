const solution = (numbers, k, m) => {
	const combinations = [];
	const temp = [];
	const n = numbers.length;
	let answer = 0;

	const DFS = (L, s) => {
		if (L === k) {
			combinations.push([...temp]);
			const copy = [...temp];
			const sum = copy.reduce((acc, cur) => acc + cur);
			if (sum % m === 0) answer++;
		} else {
			for (let i = s; i < n; i++) {
				temp[L] = numbers[i];
				DFS(L + 1, i + 1);
			}
		}
	};

	DFS(0, 0);
	console.log(combinations);
};

solution([2, 4, 5, 8, 12], 3, 6);
// numbers 중 k 개를 뽑는 조합의 합이 정수 m 의 배수인 개수는 몇개?xs
