var maxProfit = function (prices) {
  
  // Input: prices = [7,1,5,3,6,4]
  // Output: 5
  
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];    // 최소값 산정
    } else if (prices[i] - min > max) { // 현재 값에서 지금까지 나왔던 값중 가장 작은 값(min)을 빼서 최대값과 비교
      max = prices[i] - min;  // 그 차로 최대값을 업데이트
    }
  }

  return max;
};
  
