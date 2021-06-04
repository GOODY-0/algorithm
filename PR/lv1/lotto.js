function solution(lottos, win_nums) {
	var answer = [7, 7];
	let winCnt = 0;

	for (let i = 0; i < lottos.length; i++) {
		if (lottos[i] === 0) {
			answer[0]--;
		} else {
			win_nums.forEach((el) => {
				if (lottos[i] === el) {
					answer[0]--;
					answer[1]--;
				}
			});
		}
	}
	if (answer[0] === 7) answer[0] = 6;
	if (answer[1] === 7) answer[1] = 6;

	return answer;
}
