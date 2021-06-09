const solution = (coinKind, exchange) => {
	let answer = 0;
	const dy = Array.from({ length: exchange + 1 }, () => 1000);

	dy[0] = 0;
	for (let i = 0; i < coinKind.length; i++) {
		for (let j = coinKind[i]; j <= exchange; j++) {
			dy[j] = Math.min(dy[j - coinKind[i]] + 1, dy[j]);
		}
	}
	answer = dy[exchange];
	console.log(answer);
	return answer;
};

solution([1, 2, 5], 15); // 3

// dy = [0,0,0];
// [15, 0, 0]
// [1, 7, 0]
// [0, 0, 3]
// 							dy = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//   1원으로 채우면    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 개 동전 필요
//   2원으로 채우면    0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8 개 동전 필요
//   5원으로 채우면    0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3 개 동전 필요
