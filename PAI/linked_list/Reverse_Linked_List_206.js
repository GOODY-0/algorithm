var reverseList = function(head) {
    
     const reverse = (curr, prev=null) => {
          if(!curr) return prev;
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            return reverse(curr, prev)
    }
    
    return reverse(head)
    

    
};
