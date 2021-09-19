var removeDuplicates = function(nums) {
    let j;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[j++] = nums[i]
        }
    }
    
    return j;
};
