let singleNumber = function(nums) {
    const numsLength = nums.length;
    const numsCopy = nums;
    const pastNums = [];

    for(let i = 0; i <= numsLength; i++) {
        const currNum = numsCopy.pop();
        if(numsCopy.includes(currNum) || pastNums.includes(currNum)) {
            pastNums.push(currNum);
            continue;
        } else {
            return currNum;
        }
    }
};

// function checkExistence(numArr, num) {
//     let answer = false; 
//     numArr.forEach((el) => {
//         if(num === el) answer = true;
//     });

//     return answer;
// }


// console.log(singleNumber([4,1,2,1,2]));      // 4
// console.log(singleNumber([2,2,1]));      // 1
console.log(singleNumber([1,0,1]));      // 0