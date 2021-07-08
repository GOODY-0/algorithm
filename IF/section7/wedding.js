const solution = people => {
	let answer = 0;
	people.sort((a, b) => a[1] - b[1]);
	let stack = [];
	let count = 0;
	let max = 0;

	for (let times of people) stack.push(["s", times[0]], ["e", times[1]]);
	stack.sort((a, b) => a[1] - b[1]);
	stack.forEach(item => {
		item[0] === "s" ? count++ : count--;
		max = count > max ? count : max;
	});
	answer = max;
	return answer;
};

const testCases = [
	[
		[14, 18],
		[12, 15],
		[15, 20],
		[20, 30],
		[5, 14],
	],
	[
		[14, 18],
		[12, 15],
		[15, 20],
		[20, 30],
		[5, 14],
		[21, 24],
		[22, 23],
		[1, 29],
		[2, 3],
	],
];

function test(cases) {
	cases.forEach(arg => console.log(solution(arg)));
}

test(testCases);
