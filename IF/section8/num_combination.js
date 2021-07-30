const solution = (numbers, k, m) => {
	let count = 0;
	const temp = Array.from({ length: k }, () => 0);
	const answer = [];

	const DFS = (L, S) => {
		if (L === k) {
			const sum = temp.reduce((acc, cur) => acc + cur, 0);
			answer.push([...temp]);
			sum % m === 0 && count++;
		} else {
			for (let i = S; i < numbers.length; i++) {
				temp[L] = numbers[i];
				DFS(L + 1, i + 1);
			}
		}
	};

	DFS(0, 0);
	console.log(answer);
};

solution([2, 4, 5, 8, 12], 3, 6);
// numbers 중 k 개를 뽑는 조합의 합이 정수 m 의 배수인 개수는 몇개?xs
