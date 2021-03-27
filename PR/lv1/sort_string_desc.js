function solution(s) {
    let answer = '';
    let strArr = Array.from(s);

    strArr.sort(function (a, b) {
        return b.charCodeAt(0) - a.charCodeAt(0);
    });

    answer = strArr.join("");
    return answer;
}

solution("Zbcdefg");