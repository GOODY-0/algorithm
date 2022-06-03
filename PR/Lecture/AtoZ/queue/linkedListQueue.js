class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enque (newValue) {
        const newNode = new Node(newValue);
        if(!this.head) {
            this.head = this.tail = newNode
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size++;
    }

    deque () {
        const value = this.head.value;
        this.head = this.head.next
        this.size--;
        return value;
    }

    peek () {
        return this.head.value
    }
}