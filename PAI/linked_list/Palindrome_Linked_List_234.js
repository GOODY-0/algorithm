var isPalindrome = function(head) {
    
    // Input: head = [1,2,2,1]
    // Output: true
    
    // slow, fast 러너를 이용해 중앙원소를 찾는다.
    // fast 러너가 끝에 도달 했을 때 slow 러너는 중간에 도달한다.
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    
    // 주어진 링크드 리스트를 뒤집어서 반환하는 함수
    const reverse = (curr) => {
        let prev = null;
        while(curr) {
            let temp = curr.next;   // 현재 노드의 다음 노드를 temp 에 저장
            curr.next = prev;       // 현재 노드의 다음 노드 => 이전 노드
            prev = curr;            // 현재 노드는 이전 노드에 저장
            curr = temp;            // 다음 노드로 이동
        }
        
        return prev;
    }
    
    
    // head에서 중앙 위치까지 이동하는 firstHalf, 맨 뒤에서 중앙까지 이동하는 secondHalf
    let firstHalf = head, secondHalf = reverse(slow)

    
    // 값 비교
    while(firstHalf && secondHalf) {
        if(firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
    
    
};
