function solution(students) {
    let visible = 0;
    let curMax = 0;

    students.reduce((pre, cur) => {
        if(cur > curMax){
            curMax = cur;
            visible++;
        } 
        return pre = cur;
    }, 0);

    console.log(visible);
    return visible;
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);  // 5