// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

function solution(genres, plays) {
  const genreMap = new Map();
  
  genres
      .map((genre,idx) => [genre, plays[idx]])
      .forEach(([genre, play], index) => {
          const data = genreMap.get(genre) || {total : 0, songs : []};
          genreMap.set(genre, {
              total : data.total + play,
              songs : [...data.songs, {play, index}]
                  .sort((a,b) => b.play - a.play)
                  .slice(0,2)
          })
  })
  
  
  return(
      [...genreMap.entries()]
          .sort((a,b) => b[1].total - a[1].total)
          .flatMap(item => item[1].songs)
          .map(song => song.index)
  )
 
}

const { msProfiler } = require("../../../../lib/msProfiler");

msProfiler(() =>
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
// [4, 1, 3, 0]
