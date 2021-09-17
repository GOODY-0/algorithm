function solution(enroll, referral, seller, amount) {
	var answer = [];
	const PRICE = 100;
	const members = {};

	// members 에 추천인, 원래 인덱스와 함께 등록
	for (let i = 0; i < enroll.length; i++) {
		const name = enroll[i];
		members[name] = {
			boss: referral[i],
			revenue: 0,
			idx: i,
		};
	}

	// name 의 추천인이 있으면 10% fee 와 함께 재귀
	const distributeIncome = (name, income) => {
		const fee = income / 10 < 1 ? 0 : Math.floor(income / 10);
		const revenue = income - fee;
		members[name].revenue += revenue;
		if (fee === 0) return;
		if (members[name].boss === "-") return;
		distributeIncome(members[name].boss, fee);
	};

	// 판매 기록 배열 순회하며 소득 계산 함수 실행
	for (let i = 0; i < seller.length; i++) {
		const sellerName = seller[i];
		const income = amount[i] * PRICE;
		distributeIncome(sellerName, income);
	}

	// 소득과 원래 인덱스만 추출
	const revenueWithIdx = [];
	for (const [key, value] of Object.entries(members)) {
		const revenue = value.revenue;
		const idx = value.idx;
		revenueWithIdx.push([revenue, idx]);
	}

	const result = revenueWithIdx.sort((a, b) => a[1] - b[1]).map((el) => el[0]);

	return result;
}
