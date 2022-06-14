const { msProfiler } = require("../../../../lib/msProfiler");
const { MaxHeap } = require("./heap");

function solution(no, works) {
  var result = 0;
  // 초기값 정렬
  works.sort((a,b) => b-a );
  const maxHeap = new MaxHeap();
  let totalWorks = 0;
  
  works.forEach((el) => {
      maxHeap.push(el)
      totalWorks += el
  })
  

  
  while(no !== 0 && totalWorks) {
      let rootValue = maxHeap.delete();
      rootValue -= 1;
      no--;
      totalWorks--;
      maxHeap.push(rootValue)
  }
  
      result = maxHeap.heap.reduce((acc,cur) => {
          if(cur) {
              return acc + cur**2
          } 
              return acc
      },0)
  

  return result;
}



msProfiler(() =>
  solution(
    1,
    [1]
  )
);
// [4, 1, 3, 0]
