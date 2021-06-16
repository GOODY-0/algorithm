function solution(S, K) {
	// write your code in JavaScript (Node.js 8.9.4)
	const arr = Array.from(S);
	const s = arr.map(el => el.charCodeAt());
	let count = 0;
	let fixed = 0;
	const fixedArr = [];
	let curArr = s;

	while (count < K) {
		curArr = curArr.slice(fixed);
		const minNum = Math.min(...curArr);
		const minIdx = curArr.indexOf(minNum);
		if (minIdx === 0) {
			fixed++;
			fixedArr.push(minNum);
		} else if (minIdx !== 0) {
			[curArr[minIdx - 1], curArr[minIdx]] = [
				curArr[minIdx],
				curArr[minIdx - 1],
			];
			count++;
		}

		if (count === K) {
			fixedArr.push(...curArr);
			break;
		}
	}

	const strArr = fixedArr.map(el => String.fromCharCode(el));
	const str = strArr.join("");
	return str;
}
