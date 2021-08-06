var swapPairs = function(head) {
  var swapPairs = function(head) {

    let prev = new ListNode();
    let root = prev;
    prev.next = head;
    
    while(head && head.next) {
        
        let b = head.next;
        head.next = b.next;
        b.next = head;
        prev.next = b;
        
        head = head.next;
        prev = prev.next.next;
    }
    
    return root.next;
};
};
