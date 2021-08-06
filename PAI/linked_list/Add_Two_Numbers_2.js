var addTwoNumbers = function(l1, l2) {
    
    let head = new ListNode(0);
    let root = head;
    let carry = 0;
    
    while(l1 || l2 || carry) {
        let sum = 0;
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        const remainder = (sum+carry) % 10
        carry = sum + carry >= 10 ? 1 : 0 
        
        head.next = new ListNode(remainder)
        head = head.next;
    
    }
    return root.next;
};
