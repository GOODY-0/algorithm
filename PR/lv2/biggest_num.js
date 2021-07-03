function solution(numbers) {
	var answer = "";
	let ns = numbers.map(number => {
		return (number + "").split("");
	});

	ns.sort((a, b) => {
		for (let i = 0; i < 4; i++) {
			if (!b[i]) return Number(b[0]) - Number(a[i]);
			else if (!a[i]) return Number(b[i]) - Number(a[0]);
			else if (Number(b[i]) !== Number(a[i])) {
				return Number(b[i]) - Number(a[i]);
			}
		}
	});
	ns = ns.map(el => el.join(""));
	answer = ns.join("");
	if (Number(answer) === 0) return "0";
	return answer;
}
