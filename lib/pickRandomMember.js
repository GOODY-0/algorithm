function pickRandomMember(members) {
	const index = Math.floor(Math.random() * members.length);
	const now = Date();
	const result = `당첨자: ${members[index]} ,  계산 시간: ${now}`;
	console.log(result);
	return members[index];
}

pickRandomMember(["택", "이몬", "어텀", "구디", "라노", "큐"]); // 2021.09.14 제출자 목록
