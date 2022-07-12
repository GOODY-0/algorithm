class MinHeap {
  constructor() {
    this.heap = [null];
  }

  add(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  delete() {
    const returnVal = this.heap[1];
    if (this.heap.length === 2) return this.heap.pop();
    const lastNode = this.heap.pop();
    this.heap[1] = lastNode;

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

    return returnVal;
  }
}
