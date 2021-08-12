var reorderLogFiles = function (logs) {
	// logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
	// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
	
	
	const digits = [];
	const letters = [];
	logs.forEach(log => {
		const splited = log.split(" ");
		// isNaN 은 "3" 도 숫자로 본다.
		if (isNaN(splited[1])) letters.push(log); 
		else digits.push(log); // split 결과인 배열의 첫번째 원소가 숫자면 숫자관련배열에 push
	});

	// 문자열 배열만 정렬하면 됌
	letters.sort((a, b) => {
		//  slice() 의 인자에 함수를 전달할 수 있음을 기억하자.
		const contentA = a.slice(a.indexOf(" ") + 1);	// "art can"
		const contentB = b.slice(b.indexOf(" ") + 1);	// "own kit dig"
		const result = contentA.localeCompare(contentB);	// "art can" 이 "own kit dig" 보다 앞섰는가? (O) => -1
		if (result !== 0) return result;		// 비교 결과가 0이 아니라면 둘 중 하나의 콘텐츠가 앞선것이므로 그대로 리턴
		else return a.localeCompare(b);			// 0이라면 dig1 같은 identifier 도 비교에 끼어듬
	});

	return [...letters, ...digits];
};
