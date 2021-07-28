var mostCommonWord = function (paragraph, banned) {
	const regex = /[\W]/gm;
	const onlyWord = paragraph.replace(regex, " ").toLowerCase().split(" ");
	const obj = new Map();
	onlyWord.forEach(word => {
		if (word !== "" && !banned.includes(word)) {
			if (obj.get(word)) obj.set(word, obj.get(word) + 1);
			else obj.set(word, 1);
		}
	});

	let max = 0;
	let maxWord = "";
	for ([key, value] of obj) {
		if (value > max) {
			max = value;
			maxWord = key;
		}
	}

	return maxWord;
};
