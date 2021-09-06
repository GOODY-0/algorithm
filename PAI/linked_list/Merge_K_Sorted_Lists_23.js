var mergeKLists = function(lists) {
    const numbers = [];
    lists.forEach((li) => {
       while(li) {
        numbers.push(li.val)
        li = li.next;
       }
   });
    
    numbers.sort((a,b) => a-b);
    
    let answerList = new ListNode();
    const answer = answerList;
    
    for(let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            answerList.next = new ListNode(number);
            answerList = answerList.next;
    }
    
    return answer.next;
    
};
