function solution(n) {

    let answer = 0;
    let numbers = [];
    for(let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    for(let i = 1; i*i < n; i++) { // 계산을 루트n까지만 하면 됌
        if(numbers[i]) {                // 아직 지워지지않았다면
            let num = numbers[i];       
            for(let j = num*num; j <= n; j += num) { // 그 수의 제곱에서 시작해서 n 이하의 그 수 의 배수들을 지워
                numbers[j-1] = 0;
            }
        }
    }
    numbers = numbers.filter((el) => {
        if(el) return el;
    })
    numbers.shift();
    answer = numbers.length;

    return answer;
}









solution(100);


// function isPrime(n) {

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }

//     return true; 
// }

