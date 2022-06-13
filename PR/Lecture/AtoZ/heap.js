// 힙의 특징
// 힙 !== 우선순위 큐
// 힙은 우선순위 큐를 구현하기 위한 방법 중 하나.
// 힙의 종류는 루트가 가장 큰 최대 힙과, 가장 작은 최소 힙으로 나뉜다.


// 힙 요소 추가
// 요소가 추가될 때는 트리의 가장 마지막 정점에 위치.
// 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
// 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다.
// 완전 이진 트리의 높이는 logN 이므로, 힙의 요소 추가 알고리즘은 O(log N) 시간복잡도를 갖는다.


// 힙 요소 제거
// 요소 제거는 루트 정점만 가능하다.
// 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다.
// 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꾼다.
// 두 자식 정점이 우선순위가 더 낮을 때 까지 반복한다.
// 완전 이진 트리의 높이는 logN 이므로, 힙의 요소 제거 알고리즘은 O(log N) 시간복잡도를 갖는다.

class MaxHeap {
  constructor () {
    this.heap = [null]
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    
    while(parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;
      currentIndex = parentIndex
      parentIndex = Math.floor(currentIndex/2);
    }
  }

  delete() {

  }
}

class MinHeap {
  constructor () {
    this.heap = [null]
  }

  push(value) {

  }

  delete() {
    
  }
}

const maxHeap = new MaxHeap();

maxHeap.push(45)
maxHeap.push(36)
maxHeap.push(54)
maxHeap.push(27)
maxHeap.push(63)