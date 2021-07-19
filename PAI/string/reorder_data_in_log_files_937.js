var reorderLogFiles = function (logs) {
	const letters = [];
	const digits = [];

	logs.forEach((log) => {
		isNaN(Number(log.split(" ")[1])) ? letters.push(log) : digits.push(log);
	});

	letters.sort((a, b) => {
		const aWords = a.split(" ").slice(1).join(" ");
		const bWords = b.split(" ").slice(1).join(" ");
		// 배열 원소 하나하나를 뽑아서 localeComapre() 할 게 아니라,
		// 배열 전체를 텍스트로 join()해서  localeCompare() 로 해야 간편.
		const compare = aWords.localeCompare(bWords);
		if (compare) return compare;
		return a.localeCompare(b);
	});

	return [...letters, ...digits];
};
