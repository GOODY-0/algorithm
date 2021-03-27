var maxDepth = function(root) {
    const rootCopy = root;
    let depth = 0;
    let n = 0;

while(rootCopy.length > 0) {
    for(let i = 0; i < 2**n; i++) {
        rootCopy.pop();
    }
    depth++;
    n++;
}

        return depth;
    
};

console.log(maxDepth([3,9,20,null,null,15,7]));
// maxDepth([0]);
