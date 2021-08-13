var reverseList = function(head) {
    
    // Input: head = [1,2,3,4,5]
    // Output: [5,4,3,2,1]
    
    const reverse = (curr, prev=null) => {
        if(!curr) return prev; // 뒤집을 노드가 없으면 이전 노드를 반환
        let temp = curr.next;
        curr.next = prev;
        prev = curr
        curr = temp             // 여기부터 위 4줄까지는 while문의 로직과 같음
        return reverse(curr, prev)  // 현재 노드에서 다시 뒤집는 로직 재귀로 시작
    }
    
return reverse(head)
    
};
