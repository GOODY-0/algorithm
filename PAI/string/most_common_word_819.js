var mostCommonWord = function (paragraph, banned) {
	const regex = /[^\w]/g;
	const countObj = new Map();
	const words = paragraph.replace(regex, " ").toLowerCase().split(" ");

	for (let i = 0; i < words.length; i++) {
		if (!banned.includes(words[i])) {
			if (words[i] === "") continue;
			if (countObj.get(words[i]))
				countObj.set(words[i], countObj.get(words[i]) + 1);
			else countObj.set(words[i], 1);
		}
	}
	const arr = [...countObj.entries()];
	arr.sort((a, b) => {
		return a[1] - b[1];
	});

	return arr.pop()[0];
};
