var trap = function(height) {
    
    // Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    // Output: 6
    
    let result = 0;
    let left = 0;
    let right = height.length-1;
    const maxHeight = Math.max(...height)       // 가장 높은 블록 찾기
    const maxHeightIdx = height.indexOf(maxHeight); // 가장 높은 블록의 인덱스 저장
    let leftMax = 0;
    let rightMax = 0;
    
    // left와 right 포인터는 각각 가장 높은 블록 직전, 직후까지만 이동
    while(left < maxHeightIdx) {
        // 왼쪽 포인터가 왼쪽에서 가운데로 오면서 만났던 가장 높은 블록에서 현재 블록의 높이 차를 구함
        leftMax = height[left] > leftMax ? height[left] : leftMax;
        result += leftMax - height[left]
        left++
    }
    
    while(right > maxHeightIdx) {
        // 왼쪽포인터와 같음
        rightMax = height[right] > rightMax ? height[right] : rightMax;
        result += rightMax - height[right]
        right--
    }
    
    
    return result;
};
