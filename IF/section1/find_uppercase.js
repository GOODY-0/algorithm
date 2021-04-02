function solution(str) {
    const regex = /[A-Z]/;
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(regex.test(str[i])) count++;
    }

    console.log(count);
    return count;
}

solution("KoreaTimeGood");      // 3