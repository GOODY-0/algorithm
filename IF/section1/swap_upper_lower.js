function solution (str) {

    const upperRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    let result = '';

    for(let i = 0; i < str.length; i++) {
        if(upperRegex.test(str[i])) result += str[i].toLowerCase();
        else if(lowerRegex.test(str[i])) result += str[i].toUpperCase();
    }

    return result;
}

solution("StuDY");      // sTUdy