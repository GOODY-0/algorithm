var swapPairs = function(head) {
   let cur = head;
    
    while(cur && cur.next) {
        [cur.val, cur.next.val] = [cur.next.val, cur.val];
        cur = cur.next.next;
    }
    
    return head
};
