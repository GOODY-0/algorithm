function sockMerchant(n, ar) {
    const nums = {};
    let answer = 0;

    ar.forEach((el, idx) => {
        if (!nums[el]) nums[el] = 1;
        else nums[el]++;
    });

    console.log(nums);
    const keys = Object.keys(nums);

    keys.forEach((el, idx) => {
        if (nums[el] > 1) {
            if(nums[el] % 2 !== 0 ) {
                nums[el]--;
            } 
            answer += nums[el];
        }
        
    })

    answer /= 2;
    console.log(answer);
    // // for(a in nums) {
    // //     if(nums[a] > 1) answer += nums[a];
    // // }

    //                                         // 9 -> 4.5 -> 4 -> 35
    // if(answer % 2 !== 0) {                  // 15 -> 7.5 -> 7 -> 6
    //     answer /= 2;
    //     answer = Math.floor(answer);
    //     answer--;
    // }else {
    //     answer /= 2;
    //     answer--;
    // }

    // console.log(answer);
    // return answer;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);  // 3
sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]);  // 6
sockMerchant(6, [1, 1, 2, 3, 4, 6]);  // 1