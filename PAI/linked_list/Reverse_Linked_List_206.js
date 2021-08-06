var reverseList = function(head) {
    
    if(!head) return null
    let num;
    while(head) {
        num = new ListNode(head.val, num)
        head = head.next;
    }
    return num;

    
};
