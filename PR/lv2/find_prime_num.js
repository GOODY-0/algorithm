function solution(numbers) {
	var answer = 0;
	const numberSplited = numbers.split("");

	const permutations = new Set();
	const temp = [];
	const ch = Array.from({ length: numberSplited.length }, () => 0);

	const DFS = (L, M) => {
		if (L === M) {
			permutations.add(Number([...temp].join("")));
		} else {
			for (let i = 0; i < numberSplited.length; i++) {
				if (ch[i] === 0) {
					ch[i] = 1;
					temp[L] = Number(numberSplited[i]);
					DFS(L + 1, M);
					ch[i] = 0;
				}
			}
		}
	};

	// numbers에서 1개, 2개, 3개, ... number.length 개 뽑을 때의 순열을 구한다.
	for (let i = 1; i <= numberSplited.length; i++) DFS(0, i);

	const p = Array.from(permutations);
	p.forEach(el => {
		if (isPrime(el)) {
			answer++;
		}
	});
	return answer;
}

const isPrime = num => {
	if (num === 2) return true;
	if (num === 0 || num === 1) return false;
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};
