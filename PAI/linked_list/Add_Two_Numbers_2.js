var addTwoNumbers = function(l1, l2) {
    
    
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    
    let head = new ListNode(0);
    let root = head;    // 리스트 전체를 반환해서 보여줘야 하므로 미리 root를 저장해놓는다.
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
        
        const remainder = (sum+carry) % 10      // 이전 연산에서 가져온 carry 도 합산한다.
        carry = sum + carry >= 10 ? 1 : 0 
        
        head.next = new ListNode(remainder)     
        head = head.next;                       // 일의자리수로 노드를 만들어 헤드의 다음에 붙인다.
    
    }
    return root.next;
};
        
