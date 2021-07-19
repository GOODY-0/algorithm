var isPalindrome = function (s) {
	const str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); // 영문자 or 숫자가 아니면 빈 문자열로 replace + 소문자로 변환

	// 팰린드롬 검사
	let i = 0,
		j = str.length - 1;
	while (j > i) if (str[i++] !== str[j--]) return false;
	return true;
};
