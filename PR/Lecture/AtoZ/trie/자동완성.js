class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(string) {
    let currNode = this.root;
    for (const char of string) {
      if (!currNode.children.get(char)) {
        currNode.children.set(char, new Node(1));
      } else {
        const children = currNode.children.get(char);
        children.value++;
        currNode.children.set(char, children);
      }
      currNode = currNode.children.get(char);
    }
  }

  search(string) {
    let currNode = this.root;
    let cnt = 0;
    for(const char of string) {
      const childrenNode = currNode.children.get(char);
      if(childrenNode.value === 1) {
        cnt++;
        return cnt;
      }
      cnt++;
      currNode = currNode.children.get(char)
    }
    return cnt;
  }
}


function solution(words) {
  let result = 0;
  const trie = new Trie();
  words.forEach((word) => trie.add(word))
  words.forEach((word) => {
    result += trie.search(word)
  })
  return result;
}

console.log(solution(["go", "gone", "guild"]));