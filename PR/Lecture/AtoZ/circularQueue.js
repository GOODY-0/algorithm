class CircularQueue {
    constructor (maxSize) {
        this.maxSize = maxSize
        this.queue = []
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue (value) {
        if(this.isFull()) {
            console.log('queue is full')
            return;
        }
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize
    }

    dequeue () {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size -= 1;
        return value;
    }

    isFull () {
        return this.size === this.maxSize;
    }

    peek () {
        return this.queue[this.front];
    }

}