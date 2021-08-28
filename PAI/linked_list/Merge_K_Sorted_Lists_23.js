var mergeKLists = function(lists) {
    const numbers = [];
    for(let i = 0; i < lists.length; i++) {
        while(lists[i]) {
            numbers.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    
  
    
    numbers.sort((a,b) => a-b);
    
    let answerList = new ListNode();
    const answer = answerList;
    
    for(let i = 0; i < numbers.length; i++) {
        answerList.next = new ListNode(numbers[i]);
        answerList = answerList.next;
    }
    
    return answer.next;
};
