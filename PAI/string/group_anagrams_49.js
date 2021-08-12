var groupAnagrams = function (strs) {
	// Input: strs = ["eat","tea","tan","ate","nat","bat"]
	//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
	
	const result = [];
	const dict = new Map();
	strs.forEach(str => {
		// 문자열 원소들로 이뤄진 배열은 그냥 sort() 만 해도 정렬된다.
		const sortedStr = str.split("").sort().join("");	// ["a", "e", "t"].join(") => "aet"
		if (!dict.get(sortedStr)) dict.set(sortedStr, [str]);	// 정렬한 문자를 key로 하는 value가 map 객체에 없으면 value를 정해주는데, Output의 원소들이 배열이므로 [str] 
		else dict.set(sortedStr, [...dict.get(sortedStr), str]);	
	});
	return Array.from(dict.values());	// map.values() 가 iterator를 반환하므로 Array.from() 으로 배열로 치환할 수 있다.
};
