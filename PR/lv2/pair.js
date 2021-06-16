function solution(s) {
	const arr = [...s];
	if (s.length % 2 !== 0) return 0;
	const stack = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === stack[stack.length - 1]) {
			stack.pop();
			continue;
		}
		stack.push(arr[i]);
	}

	if (stack.length === 0) return 1;
	else return 0;
}
