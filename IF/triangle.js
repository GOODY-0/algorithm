const isTriangle = (numbers) => {
    numbers = insertionSort(numbers);
    const c = numbers[numbers.length-1];

    if(number[0]+numbers[1] > c) return true;
    else return false;

} 

const insertionSort = (numbers) => {
    for(let i = 1; i < numbers.length; i++) {
        let cur = numbers[i];
        let left = i - 1;

        while(left >=0 && numbers[left] > cur) {
            numbers[left+1] = numbers[left];
            left--;
        }

        numbers[left+1] = cur;
        console.log(`${i}회전: ${numbers}`);
    }

    return numbers;
}

const nums = [3,7,2,5,1,4];
console.log(isTriangle(nums));
console.log(insertionSort(nums));