function solution(strings, n) {
    let answer = [];
    answer = strings;

    answer.sort(function (a, b) {
        if (a[n].charCodeAt(0) === b[n].charCodeAt(0)) {
            let idx = 0;
            while (a[idx].charCodeAt(0) === b[idx].charCodeAt(0)) {
                idx++;
            }
            return a[idx].charCodeAt(0) - b[idx].charCodeAt(0);
        }
        return a[n].charCodeAt(0) - b[n].charCodeAt(0);

    });
    console.log(answer);
    return answer;
}


solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);