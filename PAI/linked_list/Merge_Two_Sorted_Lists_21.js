function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

var mergeTwoLists = function (l1, l2) {
  
  // Input: l1 = [1,2,4], l2 = [1,3,4]
  // Output: [1,1,2,3,4,4]
  
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode; // 리스트 전체를 반환해야 하므로 tempNode = tempNode.next 로 이동하지 않은, head를 가진 노드가 필요함.

  while (l1 && l2) {
    if (l1.val < l2.val) {  // 두 노드 중 작은 노드부터 currentNode에 붙음
      currentNode.next = l1;
      l1 = l1.next;  // currentNode에 노드를 전달해줬으니 다음으로 넘어감
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next; 
  }

  currentNode.next = l1 || l2;  // 위 반복문을 마치면 l1과 l2 둘 중 하나는 null이 되고, 나머지 하나는 아닐 것이므로, 아닌 노드를 이어받음
  return tempNode.next;
};
