const solution = (numbers, M) => {
	const answer = [];
	const check = new Array(numbers.length);
	check.fill(0);
	const tmp = new Array(M);
	tmp.fill(0);

	const DFS = (L) => {
		if (L === M) {
			answer.push([...tmp]);
		} else {
			for (let i = 0; i < numbers.length; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					tmp[L] = numbers[i];
					DFS(L + 1);
					check[i] = 0;
				}
			}
		}
	};
	DFS(0);
	console.log(answer);
};

solution([3, 6, 9], 2);
// numbers중 m 개를 뽑아 일렬로 나열하는 방법 모두 출력..
