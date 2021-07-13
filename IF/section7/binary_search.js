const solution = (arr, num) => {
	let answer = 0;
	arr.sort((a, b) => a - b);
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor(arr.length / 2);

	while (arr[mid] !== num) {
		if (num > arr[mid]) {
			left = mid + 1;
		} else if (arr[mid] > num) {
			right = mid - 1;
		}
		mid = Math.floor((left + right) / 2);
	}

	answer = mid + 1;
	console.log(answer);
	return answer;
};

solution([7, 28, 43, 67, 88, 92, 100], 100); // 7
solution([23, 87, 65, 12, 57, 32, 99, 81], 32); // 3
