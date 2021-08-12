var longestPalindrome = function (s) {
	// Input: s = "babad"
	//Output: "bab"
	
	if (s === s.split("").reverse().join("")) return s;
	if (s.length < 3) return s[0];
	let max = "";

	const expand = (left, right) => {
		// left, right 포인터가 모두 문자열 범위 내이고, 두 포인터가 가리키는 문자열이 같을 경우
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--;
			right++;
		}
		// 위에서 left-- 되었고, slice는 원래 두번째 인자의 바로 앞까지만 잘라내므로 right++가 되었으나 그냥 right를 넣어도 상관없다.
		return s.slice(left + 1, right);
	};

	for (let i = 0; i < s.length; i++) {
		// 팰린드롬의 길이가 짝수일 경우와 홀수일 경우를 모두 계산해서 최대 길이를 구해줘야한다.
		const odd = expand(i, i + 1);
		const even = expand(i, i + 2);
		max = max.length > odd.length ? max : odd;
		max = max.length > even.length ? max : even;
	}

	return max;
};

longestPalindrome("babad");
