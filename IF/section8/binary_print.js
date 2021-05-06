const solution = (num) => {
    let answer;
    answer = DFS(num);

    return answer;
};

const DFS = (num, string = "") => {
    if (num === 1) {
        string = num + string;
        return string;
    }
    const remainder = Math.floor(num % 2);
    const quotient = Math.floor(num / 2);
    string = remainder + string;
    return DFS(quotient, string);
};

solution(11); // 1011
// 11%2 1
// 5%2 1
// 2%2 0
// 1%2  1
