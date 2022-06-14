

class UndirectedGraph {
  constructor(nodeCnt) {
    this.size = nodeCnt - 1
    this.graph = Array.from({length: nodeCnt}, ()=>new Array(nodeCnt))
  }

  connect(nodeA, nodeB) {
    if(nodeA > this.size || nodeB > this.size) return;
    this.graph[nodeA][nodeB] = true;
    this.graph[nodeB][nodeA] = true;
  }

}

const graph = new UndirectedGraph(5);

graph.connect(3,2)
console.log(graph.graph)