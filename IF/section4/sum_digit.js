const solution = nums => {
	let max = 0;
	let answer;
	nums.forEach(num => {
		let sum = 0;
		let temp = num;
		while (temp) {
			// 자릿수끼리 더하는 방법 : 주어진 자연수를 10으로 나눈 나머지가 각 자릿수.
			sum += temp % 10;
			temp = Math.floor(temp / 10);
		}
		if (sum > max) {
			max = sum;
			answer = num;
		}
		if (sum === max) {
			answer = num > answer && num;
		}
	});

	console.log(answer);
};

solution([40, 460, 128, 603, 521, 137, 123]);
