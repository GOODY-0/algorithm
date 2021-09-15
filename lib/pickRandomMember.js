function pickRandomMember(members) {
	const index = Math.floor(Math.random() * members.length);
	const now = Date();
	const result = `당첨자: ${members[index]} ,  계산 시간: ${now}`;
	console.log(result);
	return members[index];
}

pickRandomMember(["이몬", "어텀", "택", "큐", "구디", "라노"]); // 2021.09.15 제출자 목록
