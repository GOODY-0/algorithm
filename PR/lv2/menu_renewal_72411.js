function solution(orders, course) {
  var answer = [];

  course.forEach((num) => {
    const menuCombiCount = {};
    let maxCount = 0;

    // 각 문자열 마다 만들 수 있는 course개의 조합별로 카운팅
    orders.forEach((order) => {
      const arr = Array.from(order);
      arr.sort();
      const combinations = getCombinations(arr, num);
      combinations.forEach((combi) => {
        combi = combi.join('');
        if (menuCombiCount[combi]) menuCombiCount[combi] += 1;
        else menuCombiCount[combi] = 1;
      });
    });

    // menuCombiCount 에서 가장 큰 value 구하기
    for (const count of Object.values(menuCombiCount)) {
      maxCount = count >= maxCount ? count : maxCount;
    }

    // maxCount 와 value 가 같은 메뉴 조합만 골라내기
    const topMenus = Object.entries(menuCombiCount).reduce((acc, cur) => {
      return cur[1] === maxCount && cur[1] !== 1 ? [...acc, cur[0]] : acc;
    }, []);

    const flattendTopMenus = topMenus.flat();
    answer.push(...flattendTopMenus);
  });

  answer.sort((a, b) => a.localeCompare(b));
  return answer;
}

// 배열 arr 에서 원소 selectedNumber 개를 고르는 조합 반환
function getCombinations(arr, selectedNumber) {
  if (selectedNumber === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectedNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
}
