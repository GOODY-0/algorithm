var swapPairs = function(head) {
    
    // Input: head = [1,2,3,4]
    // Output: [2,1,4,3]
    
    
    if(head && head.next) {     // 재귀이므로, swapPairs가 계속 실행되다가 head.next 가 없으면 null 을 반환
        let p = head.next;
        head.next = swapPairs(p.next);      // 3.next = null
        p.next = head;                      // 4.next = 3
        return p;                           // return 4 (->3)
    }                                       // 1.next = 4 (->3) (9번째줄)
                                            // 2.next = 1 (->4->3)
                                            // return 2 (->1->4->3)
    
   return head;
};
