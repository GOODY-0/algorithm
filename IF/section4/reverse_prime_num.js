const solution = nums => {
	const answers = [];

	const isPrime = num => {
		if (num === 1) return false;
		if (num === 2) return true;
		for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
			if (num % i === 0) return false;
		}
		return true;
	};

	nums.forEach(num => {
		let res = 0;
		while (num) {
			let t = num % 10;
			res = res * 10 + t;
			num = Math.floor(num / 10);
		}
		if (isPrime(res)) answers.push(res);
	});

	console.log(answers);
};

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
