var twoSum = function (nums, target) {
    for(let j = 0; j < nums.length; j++) {
        for(let i = 1; i < nums.length; i++) {
            if( i > j && nums[j] + nums[i] === target) return [j, i];
        }
    }
}


const arr1 = [2, 7, 11, 15];
const arr2 = [3, 2, 4];
const arr3 = [3, 3];
const arr4 = [2, 5, 5, 11];
console.log(twoSum(arr1, 18));