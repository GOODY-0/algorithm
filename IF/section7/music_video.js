const solution = (songs, dvd) => {
  songs.sort((a, b) => a - b);

  const dvdList = [];
  let bfDvd = 0;
  for (let i = dvd; i <= songs.length; i += dvd) {
    const subArr =
      i + dvd > songs.length
        ? songs.slice(bfDvd, songs.length)
        : songs.slice(bfDvd, i);
    dvdList.push(subArr);
    bfDvd += dvd;
  }

  while (true) {
    let cnt = 0;
    for (let i = dvdList.length - 1; i > 0; i--) {
      const curList = dvdList[i];
      const bfList = dvdList[i - 1];
      const sumGap = getSum(dvdList[i]) - getSum(dvdList[i - 1]);
      if (sumGap > curList[0]) {
        bfList.push(curList.shift());
        cnt++;
      }
    }
    if (cnt === 0) break;
  }

  const sumList = dvdList.map((arr) => {
    return arr.reduce((acc, cur) => (acc += cur));
  });

  console.log('dvdList : ', dvdList);
  console.log('sumList:', sumList);

  console.log('answer:', Math.max(...sumList));
};

const getSum = (arr) => {
  return arr.reduce((acc, cur) => (acc += cur));
};

solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // 17
solution([10, 32, 100, 42, 5000, 24], 3); //
solution([39, 24, 50, 12, 7], 2); //
// songs의 각 song 들을 dvd개의 배열에 나눠서 넣는데,
// dvd개의 배열 의 각자의 합들 중 최대값이 가장 작게 나올 수 있는 경우를 구해야돼
