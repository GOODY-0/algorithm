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
}

function solution(words) {
  var answer = 0;
  let v = 0;
  const trie = new Trie()
  // 검색어 학습
  words.forEach(word => trie.insert(word));
  
  // 검사
  words.forEach(word => {
      v += trie.has(word)
      // go 라는 애가 있으면, 결과가 1개면 stop
      console.log('result : ', v)
  })
  
  
  return answer;
}

solution(["go", "gone", "guild"])