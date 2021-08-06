var swapPairs = function(head) {
    if(head && head.next) {
        let p = head.next;
        head.next = swapPairs(p.next)
        p.next = head;
        return p;
    }
    return head;
};
