const solution = conf => {
	let answer = 0;

	conf.sort((a, b) => {
		if (a[1] === b[1]) return a[0] - b[0];
		else return a[1] - b[1];
	});

	let et = 0;
	for (let times of conf) {
		if (times[0] >= et) {
			et = times[1];
			answer++;
		}
	}

	console.log(answer);
};

function test(arg) {
	solution(arg);
}

test([
	[1, 3],
	[2, 3],
	[3, 3],
]);
