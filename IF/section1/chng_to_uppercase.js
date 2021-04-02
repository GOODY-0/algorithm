function solution(str) {

    let result = '';
    for(let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase();
    }
    console.log(result);
    return result;
}

solution("ItisTimeToStudy");  // ITISTIMETOSTUDY