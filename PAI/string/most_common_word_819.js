var mostCommonWord = function (paragraph, banned) {
	// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", 
	// banned = ["hit"]
	// Output: "ball"
	
	const regex = /[\W]/gm;	// 정규표현식으로 문자가 아닌 걸 거름
	const onlyWord = paragraph.replace(regex, " ").toLowerCase().split(" ");// ["bob", "hit", "a", "ball", "the", "hit", "ball", "flew", "far", "after", "it", "was", "hit"]
	const obj = new Map();
	onlyWord.forEach(word => {
		if (word !== "" && !banned.includes(word)) {	// banned 배열 안에 있는 원소중 word(ex: "hit", "ball")가 없다면
			if (obj.get(word)) obj.set(word, obj.get(word) + 1); 	// 객체에 word를 키로 하는 객체가 있다면 그 값을 1 늘린다
			else obj.set(word, 1);
		}
	});

	let max = 0;
	let maxWord = "";
	for ([key, value] of obj) {		// 객체 순회는 for of로
		if (value > max) {
			max = value;
			maxWord = key;
		}
	}

	return maxWord;
};
