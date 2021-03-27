function solution(a,b) {
    let answer = '';
    const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(`2016-${a}-${b}`);
    answer = DAYS[date.getDay()];
    console.log(answer);
    return answer;
}


solution(5,24);