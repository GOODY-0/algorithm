const solution = (arr1, arr2) => {
    const result = [];
    
    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b);
    let lIndex = 0;
    let rIndex = 0;
  
    while(true) {

        const lPointer = arr1[lIndex];
        const rPointer = arr2[rIndex];

        if(!lPointer || !rPointer) break;

        if(lPointer > rPointer) {
            rIndex++;
        }

        if(rPointer > lPointer) {
            lIndex++;
        }

        if(rPointer === lPointer) {
            result.push(rPointer);
            lIndex++;
            rIndex++;
        }


    }
    console.log(result);
    return result;
    
}

const array1 = [1,3,9,5,2];
const array2 = [3,2,5,7,8];
solution(array1, array2);           // 2 3 5