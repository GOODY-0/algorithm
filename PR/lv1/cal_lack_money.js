function solution(price, money, count) {
    var answer = -1;
    let totalPrice = 0;
    for (let i = 1; i <= count ; i++) {
        totalPrice += price * i
    }
    
    answer = totalPrice - money
    if (answer < 0) answer = 0;
    return answer;
}
