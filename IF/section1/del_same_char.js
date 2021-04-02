function solution(str) {
    const set = new Set(str);
    result = [...set].join("");
    console.log(result);
    return result;
}

solution("ksekkset");   // kset
