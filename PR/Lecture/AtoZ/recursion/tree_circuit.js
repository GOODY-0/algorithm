class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  // 전위순회
  preorder(currNode) {
    console.log(currNode.value);
    if (currNode.left) this.preorder(currNode.left);
    if (currNode.right) this.preorder(currNode.right);
  }

  // 중위 순회
  inorder(currNode) {
    if (currNode.left) this.inorder(currNode.left);
    console.log(currNode.value);
    if (currNode.right) this.inorder(currNode.right);
  }

  // 후위 순회
  postorder(currNode) {
    if (currNode.left) this.inorder(currNode.left);
    if (currNode.right) this.inorder(currNode.right);
    console.log(currNode.value);
  }
}
