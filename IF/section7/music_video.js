const solution = (songs, dvd) => {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= dvd) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  console.log(answer);
};

const count = (songs, capacity) => {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (x + sum > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
};

solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // 17
solution([10, 32, 100, 42, 5000, 24], 3); //
solution([39, 24, 50, 12, 7], 2); //
// songs의 각 song 들을 dvd개의 배열에 나눠서 넣는데,
// dvd개의 배열 의 각자의 합들 중 최대값이 가장 작게 나올 수 있는 경우를 구해야돼
