const solution =(str)=> {
    const regex = /[0-9]/;
    let numbers = '';
    for(let i = 0; i < str.length; i++) {
        if (regex.test(str[i])) numbers+= str[i];
    }

    return (Number(numbers));
}

solution("g0en2T0s8eSoft");      // 208 
solution("tge0a1h205er");      // 1205