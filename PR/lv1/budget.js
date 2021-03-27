function solution(d, budget) {
    var answer = 0;
    const sortedD = d.sort((a, b) => a - b);


    let sum = 0;


    for (let i = 0; i < sortedD.length; i++) {
        if (sum + sortedD[i] <= budget) {
            sum += sortedD[i];
            answer++;
        } else {
            break;
        }
    }




    console.log(answer);
    return answer;
}

solution([1, 3, 2, 5, 4], 9);       // 3
solution([2, 2, 3, 3], 10);        // 4
solution([1, 23, 10, 8], 20);        // 3
solution([8, 23, 11, 7], 30);        // 3
solution([8, 5, 2, 1], 7);        // 2

// d의 최대한 많은 원소를 합한 값이  budget 보다 작은 수가 나와야 한다.
