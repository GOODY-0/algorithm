var oddEvenList = function(head) {
    
    // Input: head = [1,2,3,4,5]
    // Output: [1,3,5,2,4]
    
    if(!head) return head   // 예외처리
    let odd = head;
    let even = head.next;
    let even_head = even;   // 홀짝의 시작노드를 각자 정해주고, 짝수노드의 헤드는 따로 저장해놨다가 홀수노드 끝에 붙인다
    
    while(odd && odd.next) {
        
        // even.next만 검사하는 이유는 odd.next는 위 while 조건에서 거르기때문
        if(!even.next) break;
        
        // odd 와 even 모두 두 칸씩 이동
        [odd.next, even.next] = [odd.next.next, even.next.next];
        [odd, even] = [odd.next, even.next];
    }
    odd.next = even_head;
    
    return head;
   
};
