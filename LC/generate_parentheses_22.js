var generateParenthesis = function (n) {
	if (n === 1) return ["()"];
	if (n === 2) return ["()()", "(())"];
	// n 만큼의 괄호 원소들 (짝 맞춰서) 을 갖고 있는 배열을 만든다.
	const parentheses = [];
	for (let i = 0; i < n; i++) parentheses.push("(", ")");

	// 해당 배열로 만들 수 있는 모든 순열을 구한다.
	const permutations = getPermutation(parentheses, n * 2);

	// 순열 중 괄호 짝이 맞고, 중복이 아닌 것들만 map 에 저장한다.
	const parenthesesMap = new Map();
	permutations.forEach((p) => {
		const str = p.join("");
		if (!parenthesesMap.has(str) && isValidParentheses(str)) parenthesesMap.set(str, true);
	});

	// map 을 .keys() 로 리턴한다
	console.log(Array.from(parenthesesMap.keys()));
	return parenthesesMap.keys();
};

function getPermutation(arr, selectedNumber) {
	const result = [];

	if (selectedNumber === 1) return arr.map((el) => [el]);

	arr.forEach((fixed, idx, origin) => {
		const rest = origin.filter((_, index) => idx !== index);
		const permutaion = getPermutation(rest, selectedNumber - 1);
		const attached = permutaion.map((el) => [fixed, ...el]);
		result.push(...attached);
	});

	return result;
}

// 순열들 중 join 해서 만든 문자열이 기존 Map 에 없고,
// 유효한 parentheses 인지 확인한다. (함수로 구현)

function isValidParentheses(str) {
	const pStack = [];

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char === "(") pStack.push(char);
		if (char === ")") pStack.pop();
	}
	if (pStack.length !== 0) return false;
	return true;
}

generateParenthesis(5);

// ((
