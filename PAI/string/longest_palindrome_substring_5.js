var longestPalindrome = function (s) {
	// 문자열 전체가 팰린드롬인 경우 예외처리
	if (s.split("").reverse().join("") === s) return s;
	// 문자열 글자수가 1,2 개일 때 예외처리
	if (s.length <= 2) return s[0];

	// 포인터 양쪽으로 확장하며 팰린드롬 검사
	function expand(left, right) {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--;
			right++;
		}
		return s.slice(left + 1, right);
	}

	let max = "";
	for (let i = 0; i < s.length; i++) {
		max = expand(i, i + 1).length > max.length ? expand(i, i + 1) : max;
		max = expand(i, i + 2).length > max.length ? expand(i, i + 2) : max;
	}
	return max;
};
