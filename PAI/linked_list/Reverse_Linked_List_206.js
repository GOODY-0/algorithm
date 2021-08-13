var reverseList = function(head) {
    
    // Input: head = [1,2,3,4,5]
    // Output: [5,4,3,2,1]
    
    if(!head) return null // 빈 리스트면 null 반환 
    let num;
    while(head) {
        num = new ListNode(head.val, num)   // num 에 할당되기전에 우변이 먼저 평가되므로, 우변의 num은 이전 루프에서의 num이다
        head = head.next;
    }
    return num;

    
};
