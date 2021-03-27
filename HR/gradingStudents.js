// 40 미만은 실패. 38보다 작으면 올림은 일어나지 않는다.
// 해당 점수보다 큰 5의 배수와의 차가 3 미만이면 점수를 5의 배수로 올림한다
// 

function gradingStudents(grades) {
    const multipleOf5 = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
   
    for(let i = 0; i < grades.length; i++) {
        for(let j = 0; j < multipleOf5.length; j++) {
            if(multipleOf5[j] - grades[i] < 3 && multipleOf5[j] - grades[i] > 0) {
                grades[i] = multipleOf5[j];
            }
        } 
    }

    return grades;
}
const grades = [73, 67, 38, 33];
gradingStudents(grades);
