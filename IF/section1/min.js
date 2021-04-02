function solution(numbers) {
    let min = 10000;

    numbers.forEach((el) => {
        min = min > el ? el:min;
    })

    return min;
} 

solution([5,3,7,11,2,15,17]);