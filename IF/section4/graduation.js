const solution = (money, presents) => {
	let studentCnt = 0;

	presents.sort((a, b) => {
		return a[0] + a[1] - (b[0] + b[1]);
	});

	let sum = 0;
	presents.forEach(el => {
		let totalFee = el[0] + el[1];
		if (sum + totalFee <= money) {
			sum += totalFee;
			studentCnt++;
		} else {
			totalFee = el[0] / 2 + el[1];
			if (sum + totalFee <= money) {
				sum += totalFee;
				studentCnt++;
			}
		}
	});
	console.log(sum, studentCnt);
	return studentCnt;
};
const presents = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3],
];
const money = 28;
solution(money, presents); // 4
// (2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.

// 가격, 배송비 총합 기준으로 정렬
// presents 의 가격,배송비 총합을 앞에서부터 더해나가
// n번째 배열까지 더한 값이 money보다 커지면, n번째 배열의 가격을 반으로 나눠
// 나눠서 money보다 같거나 작아지면 answer 는 n
// 그래도 크면 answer는 n-1

// 가장 비싼 물건(가장뒤에있는)을 할인해, 할인해서 다 더했는데도 비싸면 해당 물건 제외
//
