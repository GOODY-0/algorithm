function solution(n, times) {
    // 최소 몇 분에 모든 심사가 끝나는가?
    // 최소시간과 최대시간을 구해보자.
    let min = 1;
    let max = Math.max(...times) * n;
    
    // 최소시간과 최대시간 사이 우리가 원하는 값이 있다.
    // 이진 탐색을 위해 mid 값을 정해보자.
    while(min <= max) {
        const mid = Math.floor((min + max) / 2);
        // mid 분 동안 각 심사관이 처리할 수 있는 입국자의 수를 모두 더해준다.
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0)
  
        // mid 분 동안 처리할 수 있는 입국자의 수가 실제 입국하려는 사람 수 (n) 보다 크다면, 
        // 모든 심사를 mid 분 보다는 빨리 끝낼 수 있다는 얘기이므로,
        // 다음 루프에서 mid 값이 작아지게끔 처리한다.
        if(sum < n) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    
    return min;
}