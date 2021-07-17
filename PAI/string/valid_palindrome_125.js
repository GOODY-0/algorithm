var isPalindrome = function (s) {
	const str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); // 영문자 or 숫자가 아니면 빈 문자열로 replace + 소문자로 변환

	// 팰린드롬 검사
	let i = 0,
		j = str.length - 1;
	while (j > i) if (str[i++] !== str[j--]) return false;
	return true;
};

/*

정규표현식 활용법 기초를 다진 느낌이다.
문자열[인덱스] 에서 인덱스를 바로 ++ 혹은 -- 해서 코드를 줄일 수 있다. 

*/
