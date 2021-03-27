function solution(n) {
    var answer = 0;
    const str = n + '';
    const arr = [...str];
    const numberedArr = arr.map((el) => Number(el));
    numberedArr.sort((a,b) => b - a);
    answer = Number(numberedArr.join(""));
    return answer;
}