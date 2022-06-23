function binarySearch (n, arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right) {
      const mid = Math.floor((left + right) / 2)
      
      if(n > arr[mid]) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      
      
      if(n % arr[mid] === 0) return mid;
  }
  
  return -1;
}   

function solution(n, times) {
  let time = 0;
  n -= times.length;
  
  
  // time이 times 배열의 원소중 하나의 배수인가?

  while (n) {
      time++;
      if(binarySearch(time, times)) {
          n--;
      }
  }
  
 
  // 가장 빠른 주기를 갖는 카운터에
  time += times[0]
  
  return time;
}

solution(6, [7,10])