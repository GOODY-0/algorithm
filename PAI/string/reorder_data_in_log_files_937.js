var reorderLogFiles = function (logs) {
	const digits = [];
	const letters = [];
	logs.forEach(log => {
		const splited = log.split(" ");
		// isNaN 은 "3" 도 숫자로 본다.
		if (isNaN(splited[1])) letters.push(log);
		else digits.push(log);
	});

	letters.sort((a, b) => {
		//  slice() 의 인자에 함수를 전달할 수 있음을 기억하자.
		const contentA = a.slice(a.indexOf(" ") + 1);
		const contentB = b.slice(b.indexOf(" ") + 1);
		const result = contentA.localeCompare(contentB);
		if (result !== 0) return result;
		else return a.localeCompare(b);
	});

	return [...letters, ...digits];
};
