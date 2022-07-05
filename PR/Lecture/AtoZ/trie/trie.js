class Node {
  constructor (value="") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor () {
    this.root = new Node();
  }

  insert(string) {
    let currNode = this.root;
    for(const char of string) {
      if(!currNode.children.has(char)) {
        currNode.children.set(char, new Node(currNode.value + char))
      }
      currNode = currNode.children.get(char)
    }
  }

  has(string) {
    let currNode = this.root;
    for(const char of string) {
      if(currNode.children.has(char)) {
        currNode = currNode.children.get(char)
      } else {
        return false;
      }
    }
    return true;
  }
}

const trie = new Trie();

trie.insert("go")
trie.insert("gone")

console.log(trie.has("go"))
console.log(trie.has("gone"))
console.log(trie.has("g"))
