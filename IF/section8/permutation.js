const solution = (numbers, M) => {
	const answer = [];
	const temp = [];
	const ch = Array.from({ length: numbers.length }, () => 0);

	const DFS = L => {
		if (L === M) {
			answer.push([...temp]);
		} else {
			for (let i = 0; i < numbers.length; i++) {
				if (ch[i] === 0) {
					ch[i] = 1;
					temp[L] = numbers[i];
					DFS(L + 1);
					ch[i] = 0;
				}
			}
		}
	};

	DFS(0);
	console.log(answer);
};

solution([1, 2, 3, 4], 3);
// numbers중 m 개를 뽑아 일렬로 나열하는 방법 모두 출력..
