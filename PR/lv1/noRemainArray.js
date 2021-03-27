/*
arr   divisor answer
[5,9,7,10]|5|[5,10]|
[2,36,1,3]|1|[1,2,3,36]|
[3,2,6]|10|[-1]
*/


const getNoRemainArray = (arr,divisor) => {
    const answer = arr.filter(function (e) {
        return e % divisor === 0
    })
    if(answer.length === 0) answer.push(-1);
    answer.sort(function (a, b) {
        return a - b;
    });
    return answer;
}
getNoRemainArray([5,9,7,10], 5);


// arr을 돌면서
// arr[i] % divisor가 0이면 answer에 arr[i] 푸쉬
