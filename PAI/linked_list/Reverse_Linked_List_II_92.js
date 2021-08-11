var reverseBetween = function(head, left, right) {
    
    // 예외 처리
    if(!head.next || left === right) return head;
    let prev = null,
        curr = head,
        next = head?.next,
        sNode = null,   // 1(sNode) 2 3 4 5
        lNode = null,   // 1 2(lNode) 3 4 5
        rNode = null,   // 1 2 3 4(rNode) 5
        eNode = null;   // 1 2 3 4 5(eNode)
    
    while(true) {
        
        // left 포인터가 제위치에 도달하고, right 포인터가 오고 있을 때
        if(left <= 1 && right >= 1) curr.next = prev
        
        // left 포인터가 제위치에 도달했을 때
        if(left === 1) {
            [sNode, lNode] = [prev, curr]    
        }
        
        // right 포인터가 제위치에 도달했을 때
        if(right === 1) {
            [eNode, rNode] = [next, curr]
            break;
        }
        
        left--
        right--
        
        [prev, curr, next] = [curr, next, next.next]
    }
    
    if(sNode) sNode.next = rNode
    else head = rNode // startNode 가 없으면 rightNode가 맨 처음
    lNode.next = eNode;
    return head
    
}
    
