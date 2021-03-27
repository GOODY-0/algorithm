
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

function deleteDuplicate(head) {
   let current = head;

       while(current !== null && current.next !== null){
           if(current.val === current.next.val) {
               current.next = current.next.next;
           } else {
               current = current.next;
           }
       }


   return head;
}

const head1 = [1, 1, 2];    // [1, 2]
const head2 = [1, 1, 2, 3, 3];  // [1, 2, 3]


console.log(deleteDuplicate(head1));
