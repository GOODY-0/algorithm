var isPalindrome = function (head) {
  if (!head) return true;
  let curNode = head;
  const arr = [];

  while (curNode) {
    arr.push(curNode.val);
    curNode = curNode.next;
  }

  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) return false;
  }
  return true;
};
