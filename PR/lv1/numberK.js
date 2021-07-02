function solution(array, commands) {
	let answer = [];
	commands.forEach(command => {
		const sortedArr = array
			.slice(command[0] - 1, command[1])
			.sort((a, b) => a - b);
		answer.push(sortedArr[command[2] - 1]);
	});

	return answer;
}
