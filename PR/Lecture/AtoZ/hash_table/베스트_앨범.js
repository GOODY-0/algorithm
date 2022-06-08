// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

function solution(genres, plays) {
   
  const totalPlaysPerGenreTable = genres.reduce((acc,cur,idx) => (
      {...acc, [cur] : acc[cur] ? acc[cur] + plays[idx] : plays[idx]}
  ),{})
  
  const sortedSongTable = genres.map((el,idx) => {
      return [el, plays[idx], idx] 
  },[]).sort((a,b) => {
      const sortByGenre = totalPlaysPerGenreTable[b[0]] - totalPlaysPerGenreTable[a[0]]
      if(sortByGenre === 0) return b[1]-a[1];
      else return sortByGenre
  })
  const genreCountTable = {};
  
  const bestAlbum = sortedSongTable.reduce((acc,cur) => {
      const genre = cur[0]
      if(!genreCountTable[genre]) {
          genreCountTable[genre] = 1
          return [...acc, cur[2]]
      } else if (genreCountTable[genre] !== 2) {
          genreCountTable[genre] = genreCountTable[genre] + 1
          return [...acc, cur[2]]
      } 
      else {
          return [...acc]
      }
  },[])

  
  
  console.log(bestAlbum);
  return bestAlbum
}
const { msProfiler } = require("../../../../lib/msProfiler");

msProfiler(() =>
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
// [4, 1, 3, 0]
