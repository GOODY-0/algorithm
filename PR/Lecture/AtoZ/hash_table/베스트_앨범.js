// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

function solution(genres, plays) {
  var answer = [];
  const totalPlaysPerGenreTable = genres.reduce((acc,cur,idx) => {
      return {
        ...acc,
        [cur] : acc[cur] ? acc[cur] + plays[idx] : plays[idx]}
  },{})
  
  console.log(totalPlaysPerGenreTable);
  return answer;
}
const { msProfiler } = require("../../../../lib/msProfiler");

msProfiler(() =>
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
// [4, 1, 3, 0]
