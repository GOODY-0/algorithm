function solution(name) {
	var answer = 0;
	let zeroFlag = true;
	let flag = false;
	for (let k = 0; k < name.length; k++) {
		if (name[k] !== "A") zeroFlag = false;
	}
	if (zeroFlag) return 0;

	for (let i = 0; flag ? i < name.length : i !== 1; flag ? i++ : i--) {
		for (let j = 1; j < Math.floor(name.length / 2); j++) {
			if (name[j] !== "A") flag = true;
		}
		if (i < 0) i = name.length - 1;
		if (i !== 0) answer++;

		const current = 65;
		const goal = name[i].charCodeAt();
		if (goal <= 78) answer += goal - current;
		else {
			answer += "Z".charCodeAt() - goal + 1;
		}
	}

	return answer;
}
solution("ABAAAAAAAAABB");
