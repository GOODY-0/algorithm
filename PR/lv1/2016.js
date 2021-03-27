function solution(a, b) {
    let answer = '';
    const FIRST_DAYS = [5, 1, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const firstDay = FIRST_DAYS[a-1];

    let day = firstDay - 1 + (b % 7);
    if(day >= 7) day = day % 7;
    if(day < 0) day = 6;

    answer = DAYS[day];
    // console.log(answer);
    return answer;
}


for(let i = 1; i < 13; i++) {
    console.log(`${i} 월 : ${solution(i,28)}`);
}

// solution(5,28);