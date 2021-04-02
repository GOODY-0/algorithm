function solution(numbers) {
    let min = 100000;

    const oddNumbers = numbers.filter(el => el % 2 !== 0);

    const sum = oddNumbers.reduce((acc, cur) => {
            min = min > cur ? cur:min;
            return acc += cur;
    }, 0);

    return (sum, min);
}

solution([12,77,38,41,53,92,85]); // 256 41
