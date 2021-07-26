var trap = function(height) {
    let left = 0;
    let right = height.length-1;
    let volume = 0;
    
    let leftMax = height[left];
    let rightMax = height[right];
    
    while(left < right) {
        leftMax = Math.max(height[left], leftMax);
        rightMax = Math.max(height[right], rightMax);
                            
        // left의 높이와 right의 높이 중 더 큰 값이 바뀔때마다 활성 포인터 교체
        if(leftMax <= rightMax) {
            // 최대높이 - 현재높이 = 물 양
            volume += leftMax - height[left];
            left++;
        } else {
            volume += rightMax - height[right];
            right--;
        }
    }
         
    return volume;
};
