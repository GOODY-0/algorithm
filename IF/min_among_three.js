const solution =(numbers)=> {

    const sortedArr = bubbleSort(numbers);
    return sortedArr;
    return sortedArr[0];

}

const bubbleSort = (numbers) => {
    for(let i = 0; i < numbers.length; i++) {
        let temp = 0;
        for(let j = 0; j < numbers.length; j++) {
            if(numbers[j] > numbers[j+1]) {
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
        console.log(`${i} 회전: ${numbers}`);
    }
    return numbers;
}


// swap(2,3);
// bubbleSort([90,91,92,93,94,95,96,97,98,99,100]);
console.log(solution([6,5,11])); 
console.log(solution([2,100,423,2,6,0,30,5,36,42,105,37])); 