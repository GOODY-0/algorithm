function solution (str) {
    let result = '';

    if(str.length % 2 === 0) {
        const midR = str.length / 2;
        const midL = (str.length / 2) - 1;
        result += str[midL] + str[midR];
    }
    else {
        const mid = Math.floor(str.length / 2);
        result += str[mid];
    }

    console.log(result);
    return result;
}

solution('study');  // u
solution('good');  // oo