function solution(s, n) {
    var answer = '';
    let unicodeArr = [];
    const UNICODE_Z = 90;
    const UNICODE_z = 122;

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== " ") {
            unicodeArr.push(s[i].charCodeAt(0) + n);
        } else {
            unicodeArr.push(s[i]);
        }
    }

    const caesarArr = unicodeArr.map((e) => {
        if(e > UNICODE_z) return (96 + (e - UNICODE_z));    // 소문자
        if(e > UNICODE_Z && e < 97) return (64 + (e-UNICODE_Z));   // 대문자
        // if(e > UNICODE_Z) return (e-(n+1));
        return e;
    })

    caesarArr.forEach((e) => {
        if( e !== " ") answer += String.fromCharCode(e);
        if( e === " ") answer += e;
    })
    console.log(unicodeArr);
    console.log(caesarArr);
    console.log(answer);
    return answer;
}

solution("AaZz", 25);