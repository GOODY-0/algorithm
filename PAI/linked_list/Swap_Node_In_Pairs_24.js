var swapPairs = function(head) {
    
    // Input: head = [1,2,3,4]
    // Output: [2,1,4,3]
    
    
    let prev = new ListNode()
    let root = prev;
    prev.next = head;       // 리스트 전체 반환을 위해 루트설정, 앞뒤 스왑을 위해 prev 선언
    
    while(head && head.next) {
        let b = head.next;   // head.next를 변수에 미리 저장
        head.next = b.next;     // head의 다음을 b의 다음으로 할당해 다다음 노드로 갈 준비
        b.next = head;          // b의 다음을 head로 할당해 스왑
        
        prev.next = b;          // a의 이전 노드가 b를 가리키도록
        
        prev = prev.next.next    // 다음 비교를 위해 prev는 두 칸 앞으로 이동
        head = head.next
    }
    return root.next;
};
