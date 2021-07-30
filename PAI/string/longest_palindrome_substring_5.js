var longestPalindrome = function (s) {
	if (s === s.split("").reverse().join("")) return s;
	if (s.length < 3) return s[0];
	let max = "";

	const expand = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--;
			right++;
		}

		return s.slice(left + 1, right);
	};

	for (let i = 0; i < s.length; i++) {
		const odd = expand(i, i + 1);
		const even = expand(i, i + 2);
		max = max.length > odd.length ? max : odd;
		max = max.length > even.length ? max : even;
	}

	return max;
};

longestPalindrome("babad");
