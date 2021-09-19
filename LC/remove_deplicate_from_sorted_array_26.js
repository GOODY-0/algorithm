var removeDuplicates = function(nums) {
    let history;
    for(let i = 0; i < nums.length; i++) {
        if(history === nums[i]) {
            nums.splice(i,1);
            i--;
        }else {
            history = nums[i]
        }
    }
    return nums.length
};
