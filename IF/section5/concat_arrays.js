const solution = (array1, array2) => {
    let lIndex = 0;
    let rIndex = 0;
    const result = [];
    
    while(true){
        let lPointer = array1[lIndex];
        let rPointer = array2[rIndex];

        if(!lPointer && !rPointer) break;
        
        if(lPointer <= rPointer || !rPointer) {
            result.push(lPointer);
            lIndex++;
        }
        if(rPointer <= lPointer || !lPointer) {
            result.push(rPointer);
            rIndex++;
        }

    }

    console.log(result);
    return result;
}


const array1= [1,3,5,24];
const array2= [2,3,6,7,9];
solution(array1, array2);





// 풀이 1
// 
// const result = [];
// const newArray = [...array1, ...array2];
// newArray.sort((a,b) => a-b);
// console.log(newArray);
// return result;
