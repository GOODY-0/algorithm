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
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  // 루트 정점 제거
  // 가장 마지막 정점을 루트로 이동
  // 자식정점 두개 중 우선순위 높은 애와 루트 비교, 교체
  // 자식정점 하나라면 걔랑 비교
  delete() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // heap[rightIndex] 는 undefined 일 수 있으므로 꼭 leftIndex < rightIndex 조건으로 검사해야 한다.
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  // 루트 정점 제거
  // 가장 마지막 정점을 루트로 이동
  // 자식정점 두개 중 우선순위 낮은 애와 루트 비교, 교체
  // 자식정점 하나라면 걔랑 비교
  delete() {
    const returnValue = this.heap[1];
    // if (this.heap.length === 2) {
    //   return returnValue;
    // }
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        const temp = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const maxHeap = new MaxHeap();

maxHeap.push(45);
maxHeap.push(36);
maxHeap.push(54);
maxHeap.push(27);
maxHeap.push(63);


const maxHeapArray = [];

maxHeapArray.push(maxHeap.delete());
maxHeapArray.push(maxHeap.delete());
maxHeapArray.push(maxHeap.delete());
maxHeapArray.push(maxHeap.delete());
maxHeapArray.push(maxHeap.delete());
console.log(maxHeapArray);

const minHeap = new MinHeap();

minHeap.push(45);
minHeap.push(36);
minHeap.push(54);
minHeap.push(27);
minHeap.push(63);

const minHeapArray = [];
minHeapArray.push(minHeap.delete())
minHeapArray.push(minHeap.delete())
minHeapArray.push(minHeap.delete())
minHeapArray.push(minHeap.delete())
minHeapArray.push(minHeap.delete())
console.log(minHeapArray)
