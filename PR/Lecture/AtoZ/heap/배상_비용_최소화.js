const { msProfiler } = require("../../../../lib/msProfiler");
const { MaxHeap } = require("./heap");

function solution(no, works) {
    let result = 0;
    let totalWorks = 0;
    // 남은 업무의 총합이 남은 기간보다 적으면 배상 비용 낼 필요 없음
    totalWorks = works.reduce((acc,cur) => acc + cur)
    if(no > totalWorks) return 0
    
    
    const maxHeap = new MaxHeap();
    // 힙 배열로 값 이동
    works.forEach((el) => {
        maxHeap.push(el)
        
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
