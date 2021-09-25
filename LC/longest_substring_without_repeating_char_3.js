var lengthOfLongestSubstring = function (s) {
	let maxLen = 0;
	let str = "";

	for (let i = 0; i < s.length; i++) {
		const duplicateTargetIdx = str.indexOf(s[i]);

		if (duplicateTargetIdx !== -1) {
			maxLen = str.length > maxLen ? str.length : maxLen;
			str = str.slice(duplicateTargetIdx + 1, i);
			str += s[i];
		} else {
			str += s[i];
			maxLen = str.length > maxLen ? str.length : maxLen;
		}
	}

	return maxLen;
};

console.log(lengthOfLongestSubstring("abaf"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("ab"));
console.log(lengthOfLongestSubstring("a"));
console.log(lengthOfLongestSubstring("abaf"));
