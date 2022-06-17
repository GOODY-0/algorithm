class Node {
  constructor (value="") {
      this.value = value;
      this.children = new Map();
  }
}

class Trie {
  constructor () {
      this.dic = new Map();
      this.root = new Node();
  }
  
  insert(string) {
      this.dic.set(string, string);
      let currNode = this.root;
      for(const char of string) {
          if(!currNode.children.has(char)) {
              currNode.children.set(char, new Node(currNode.value+char))
          }
          currNode = currNode.children.get(char);
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

  search(string) {
    let currNode = this.root;
    let cnt = 0;
    for(let i = 0; i < string.length; i++) {
      const char = string[i];
      currNode = currNode.children.get(char)
      cnt++;
      if(currNode.children.size <= 1 && !this.dic.has(currNode.value)) break;
    }
    
    return cnt;
}
}

function solution(words) {
  let v = 0;
  const trie = new Trie()
  // 검색어 학습
  words.forEach(word => trie.insert(word));
  
  // 검사
  words.forEach(word => {
      console.log(word, trie.search(word))
  })
  return v;
}

solution(["word", "war", "warrior", "world"])