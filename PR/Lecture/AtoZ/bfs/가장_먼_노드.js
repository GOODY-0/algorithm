function solution(n, edge) {
  const graph = Array.from({length: n+1}, ()=> []);
   
   for(const [src,dest] of edge) {
       graph[src].push(dest);
       graph[dest].push(src);
   }
   
   
   const distance = Array.from({length: n+1}, () => 0)
   distance[1] = 1;
   
   const queue = [1];
   while(queue.length) {
       const src = queue.shift();
       
       for(const dest of graph[src]) {
           if(distance[dest] === 0) {
               queue.push(dest)
               distance[dest] = distance[src] + 1;
           }
       }
   }
   
   
   const max = Math.max(...distance)
   return distance.filter(el => el === max).length
   
   
}