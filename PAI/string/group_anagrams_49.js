var groupAnagrams = function (strs) {
	const result = [];
	const dict = new Map();
	strs.forEach(str => {
		// 문자열 원소들로 이뤄진 배열은 그냥 sort() 만 해도 정렬된다.
		const sortedStr = str.split("").sort().join("");
		if (!dict.get(sortedStr)) dict.set(sortedStr, [str]);
		else dict.set(sortedStr, [...dict.get(sortedStr), str]);
	});
	return Array.from(dict.values());
};
