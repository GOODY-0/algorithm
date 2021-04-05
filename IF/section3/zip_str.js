const solution = (str) => {
    let stack = 0;
    let result = '';
    const arr = [...str];
    let pre = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === pre) {
            stack++;
        }
        else {
            result += stack > 1 ? pre + stack : pre;
            stack = 1;
        }
        pre = arr[i];
    }
    
    return result;
}

solution('KKHSSSSSSSE');    // K2HS7E