var isBalanced = function(root) {
    if(!root) return true;  // 빈 트리면 무조건 대칭
    let result = true;
    
    const dfs = (node, depth) => {
        if(!node) return depth;
        const leftDepth = dfs(node.left, depth+1)
        const rightDepth = dfs(node.right, depth+1)
        if(Math.abs(leftDepth - rightDepth) > 1) result = false; // 왼쪽, 오른쪽 깊이 차이가 2 이상이면 비대칭
        return Math.max(leftDepth, rightDepth)  // 왼쪽, 오른쪽 중 더 깊은 곳의 깊이를 반환해 상위의 leftDepth, rightDepth에 할당
    }
    dfs(root, 0);
    
    return result;
};
