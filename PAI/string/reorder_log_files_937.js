const solution = logs => {
	const letters = [];
	const digits = [];

	logs.forEach(log => {
		const splitedArr = log.split(" ");
		isNaN(splitedArr[1]) ? letters.push(log) : digits.push(log);
	});

	letters.sort((a, b) => {
		const aWord = a.slice(a.indexOf(" ") + 1);
		const bWord = b.slice(b.indexOf(" ") + 1);
		console.log(aWord, bWord);
		const compare = aWord.localeCompare(bWord);
		if (compare) return compare;
		return a.localeCompare(b);
	});

	return [...letters, ...digits];
};

solution([
	"dig1 8 1 5 1",
	"let1 art can",
	"dig2 3 6",
	"let2 own kit dig",
	"let3 art zero",
]);
