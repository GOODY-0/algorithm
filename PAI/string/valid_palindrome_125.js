var isPalindrome = function (s) {
	// 정규표현식 \W 는 알파벳과 **_(언더스코어)** 가 아닌 것들을 걸러낸다.
	const str = s.replace(/[\W&&_]/gm, "").toLowerCase();
	let left = 0;
	let right = str.length - 1;

	while (left < right) {	// left, right 두 포인터를 두고 가운데로 좁혀오는 방식
		if (str[left++] !== str[right--]) return false;
	}

	return true;
};
