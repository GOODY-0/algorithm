const solution = exams => {
	let answer = 0;

	for (let i = 1; i <= exams[0].length; i++) {
		for (let j = 1; j <= exams[0].length; j++) {
			let count = 0;
			for (let k = 0; k < exams.length; k++) {
				let pi, pj;
				for (let s = 0; s < exams[0].length; s++) {
					if (exams[k][s] === i) pi = s;
					if (exams[k][s] === j) pj = s;
				}
				if (pi < pj) count++;
			}
			if (count === exams.length) answer++;
		}
	}

	console.log(answer);
};

solution([
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
]);
