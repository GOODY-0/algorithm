const solution = (str) => {
    const regex= /[A-Z]|[a-z]/;
    const arr = [...str.toLowerCase()];
    const originArr = arr.filter(el => regex.test(el));

    const comparision = [...originArr.reverse()];
    
    const originStr = originArr.join("");
    const comparisionStr = comparision.join("");

    if(originStr === comparisionStr) return "YES";
    else return "NO";

}

solution("found7, time: study; Yduts; emit, 7Dnuof");   // YES   (알파벳만 검사)