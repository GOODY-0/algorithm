function ListNode(val = null, next = null) {
  this.val = val;
  this.next = next;
}

const tail = new ListNode(10);
const head = new ListNode(0, tail);

function someProblem(input1, input2) {
  console.log(input1);
}

someProblem(head);
