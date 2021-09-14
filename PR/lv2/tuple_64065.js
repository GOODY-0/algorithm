function solution(s) {
	const numberMap = new Map();
	let numStack = "";

	// 문자열 순회하며 숫자면 numStack 에 쌓는다.
	// 숫자가 아니면 쌓인 numStack을 Map 자료구조에 넣어 카운팅하고, numStack을 초기화한다.
	for (const char of s) {
		if (!isNaN(char)) {
			numStack += char;
		} else {
			numberMap.has(numStack)
				? numberMap.set(numStack, numberMap.get(numStack) + 1)
				: numberMap.set(numStack, 1);
			numStack = ``;
		}
	}

	// Map 자료구조를 순회하며 카운트를 기준으로 내림차순 정렬한다.
	const tuple = [...numberMap.entries()]
		.sort((a, b) => b[1] - a[1])
		.map(arr => Number(arr[0]))
		.filter(v => v);

	return tuple;
}
