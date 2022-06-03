class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enque(value) {
        this.queue(this.rear++) = value;
    }

    deque () {
        const value = this.queue(this.front);
        delete this.queue[this.front]
        this.front += 1
        return value;
    }

    pick () {
        return this.queue[this.front]
    }

    size () {
        return this.rear - this.front
    }
}