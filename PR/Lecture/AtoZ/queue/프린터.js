class Node {
    constructor (value) {
        this.next = null;
        this.value = value;
    }
}

class Queue {
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
            this.tail = newNode;
        }
        this.size++;
    }

    deque() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek () {
        return this.head.value
    }
}



function solution(priorities, location) {
    const queue = new Queue();
    let count = 0;

    for(let i = 0; i < priorities.length; i++) {
        queue.enque([priorities[i], i]);
    }

    priorities.sort((a,b) => b-a);
    
    while(true) {
        const curr = queue.deque();
        
        if(curr[0] < priorities[count]) {
            queue.enque(curr)
        } else {
            count++;   
            if(curr[1] === location) return count;
        }
    }
}

const {msProfiler} = require('../../../../lib/msProfiler');
msProfiler(()=>solution([1,2,3,4,5],2));