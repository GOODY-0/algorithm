var groupAnagrams = function (strs) {
	const result = [];
	const anagrams = new Map();
	strs.forEach((str, i) => {
		const arr = str.split("");
		arr.sort();
		const sortedWord = arr.join("");
		anagrams.get(sortedWord)
			? anagrams.set(sortedWord, [...anagrams.get(sortedWord), i])
			: anagrams.set(sortedWord, [i]);
	});

	for (let value of anagrams.values()) {
		result.push(value.map((el) => strs[el]));
	}
	return result;
};
