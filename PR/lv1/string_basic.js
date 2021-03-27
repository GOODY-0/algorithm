function solution(s) {
    let answer = true;
    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i < s.length; i++) {
            if(s[i] >= 0 || s[i] < 0) {
              answer = true;  
            } else {
             answer = false;
             break;
            }
        }
    } else {
        answer = false;
    }
    console.log(answer);
    return answer;
}

solution("a234");