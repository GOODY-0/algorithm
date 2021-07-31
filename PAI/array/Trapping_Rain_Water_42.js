var trap = function(height) {
    let result = 0;
    let left = 0;
    let right = height.length-1;
    const maxHeight = Math.max(...height)
    const maxHeightIdx = height.indexOf(maxHeight);
    let leftMax = 0;
    let rightMax = 0;
    
    while(left < maxHeightIdx) {
        leftMax = height[left] > leftMax ? height[left] : leftMax;
        result += leftMax - height[left]
        left++
    }
    
    while(right > maxHeightIdx) {
        rightMax = height[right] > rightMax ? height[right] : rightMax;
        result += rightMax - height[right]
        right--
    }
    
    
    return result;
};
