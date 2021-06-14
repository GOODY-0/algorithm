function solution(left, right) {
	var answer = 0;
	for (let i = left; i <= right; i++) {
		if (getDivisorCnt(i) % 2 === 0) answer += i;
		else if (getDivisorCnt(i) % 2 !== 0) answer -= i;
	}
	return answer;
}

function getDivisorCnt(num) {
	let answer = 0;
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) answer++;
	}

	return answer;
}
