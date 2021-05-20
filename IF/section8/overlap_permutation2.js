const solution = (numbers, M) => {
	const answer = [];
	const temp = new Array(M);
	temp.fill(0);

	const DFS = (L) => {
		if (L === M) answer.push([...temp]);
		else {
			for (let i = 0; i < numbers.length; i++) {
				temp[L] = numbers[i];
				DFS(L + 1);
			}
		}
	};

	DFS(0);
	console.log(answer);
};

solution([3, 6, 9], 2);
