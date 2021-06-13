function solution(s) {
	if (s.length % 2 !== 0) return 0;
	const arr = Array.from(s);
	while (arr.length) {
		let flag = 0;
		for (let i = arr.length - 1; i >= 0; i--) {
			if (arr[i] === arr[i - 1]) {
				arr.splice(i - 1, 2);
				flag = 1;
			}
		}
		if (flag === 0) return 0;
	}

	return 1;
}
solution("baabaa");
