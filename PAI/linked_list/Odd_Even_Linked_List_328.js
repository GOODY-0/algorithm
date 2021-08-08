var oddEvenList = function(head) {
    if(!head) return head
    let odd = head;
    let even = head.next;
    let even_head = even;
    
    while(odd && odd.next) {
        if(!even.next) break;
        
        [odd.next,even.next] = [odd.next.next,even.next.next];
        [odd,even] = [odd.next,even.next];
    }
    odd.next = even_head;
    
    return head;
   
};
