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

    // 2 3 5