function diagonalDifference(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let rightIdx = arr.length-1;

    for(let i = 0; i < arr.length; i++) {
        leftSum += arr[i][i];
        rightSum += arr[i][rightIdx];
        rightIdx--;
    }

 

    console.log(Math.abs(leftSum - rightSum));
    
}


const sample1 = [[11,2,4], [4,5,6], [10,8,-12]];       // 15
const sample2 = [[9,13,5,2], [1, 11, 7, 6], [3, 7, 4, 1], [6, 0, 7, 10]];

diagonalDifference(sample1);    // 15