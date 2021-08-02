var isPalindrome = function(head) {
    
    // slow, fast 러너를 이용해 중앙원소를 찾는다.
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
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
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
