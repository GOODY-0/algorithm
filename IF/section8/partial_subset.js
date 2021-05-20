const solution = (num) => {
	const answer = [];
	let result = "";
	const arr = new Array(num);
	arr.fill(1);

	const DFS = (dt) => {
		if (dt === num + 1) {
			for (let i = 1; i <= arr.length; i++) {
				if (arr[i] === 1) result += i;
			}
			result && answer.push(result);
			result = "";
		} else {
			arr[dt] = 1;
			DFS(dt + 1);
			arr[dt] = 0;
			DFS(dt + 1);
		}
	};

	DFS(1);
	console.log(answer);
};

solution(3); // [ "123", "12", "13" , "1" ,  "23" , "2" , "3" ]

/*
                                    0                
                 1(o)                              1(x)           
          2(o)          2(x)                 2(o)       2(x)             
      3(o)  3(x)      3(o)  3(x)         3(o)  3(x)   3(o)  3(x)

*/
