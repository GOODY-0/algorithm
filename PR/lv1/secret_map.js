function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < n; i++) answer.push("");

    const array1 = arr1.map((el) => {
        if(el.toString(2).length < n) {
            return (flatten(n,el.toString(2)));
        } else {
            return el.toString(2);
        }
    });

    const array2 = arr2.map((el) => {
        if(el.toString(2).length < n) {
            return (flatten(n, el.toString(2)));
        } else {
            return el.toString(2);
        }
    });


    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array1[i].length; j++) {
            if(array1[i][j] === array2[i][j]) {
                if(array1[i][j] === "1") {
                    answer[i] += "#";
                } else {
                    answer[i] += " ";
                }
            } 
            else answer[i] += "#";
        }
    }



   
    console.log(answer);
    return answer;
}

function flatten(n, str) {
    const l = str.length;
    for(let i = 0; i < n-l; i++) {
        str = "0" + str;
    }
    return str;
}

solution(5,[9,20,28,18,11],[30,1,21,17,28]);
solution(6,[46,33,33,22,31,50],[27,56,19,14,14,10]);


// arr1과 arr2의 원소들을 모두 이진수로 변환한다
// 이진수로 변한 배열 끼리 비교했을 때
// 둘 중 하나라도 1이면 answer의 동일 인덱스에도 1
// 둘 다 0이면 answer의 동일 인덱스에도 0