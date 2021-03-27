function miniMaxSum(arr) {

    const sortedArr = arr.sort((a,b) => {return a-b;});

    const allSum = arr.reduce(function(acc, cur) {
        return acc += cur;
    });

    const minSum = allSum - sortedArr[sortedArr.length-1];
    const maxSum = allSum - sortedArr[0];



    console.log(minSum + " " + maxSum);
}



const arr1 = [40,123,1,4000,52];
miniMaxSum(arr1);