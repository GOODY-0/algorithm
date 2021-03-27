/**
 * Definition for singly-linked list.
 
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
function ListNode(val) {
    this.val = val;
    this.next = null;
}





var hasCycle = function (head) {
    if (!head) return false;

    let walker = head;
    let runner = head;

    while (runner) {
        runner = runner.next;
    }
    // runner는 리스트의 끝까지 도착했다.

    while (walker.next !== null) {
        if (walker !== runner.next) {
            walker = walker.next;
        } else if (walker === runner.next) {
            return true;
        } else {
            return false;
        }
    }
};


var hasCycle = function (head) {
    if (!head) return false;

    let walker = head;
    let runner = head;

    while (runner) {
        if (!runner.next) return false;

        runner = runner.next.next;
        walker = walker.next

        if(runner === walker) return true;
    }
    return false;
};


















// var hasCycle = function (head) {
//     if (head.next === null && pos === 0) return true;
//     let current = head;
//     let walker = head;

//     while (current.next !== null) {
//         current = current.next;
//     }
//     // current 가 마지막 노드까지 도착한 상태
//     if(pos < 0 ) return false;
//     if(pos === 0) current.next = head;
//     while(--pos >= 0) {
//         walker = walker.next;
//     }

//     current.next = walker;

//     if(current.next !== null) {
//         return true;
//     } else {
//         return false;
//     }

// };
let pos = 1;
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

let head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(hasCycle(head));
