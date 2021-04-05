const solution = (str, char) => {
    const distance = [];
    let p = 1000;
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== char) p++;
        else p = 0;
        distance.push(p);
    }

    p = 1000;

    for(let i = str.length-1; i >= 0; i--) {
        if(str[i] !== char) {
            p++;
            distance[i] = distance[i] > p ? p : distance[i];
        }else p = 0;
    }

    return distance;
  
}

solution("teachermode", "e");    // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0];