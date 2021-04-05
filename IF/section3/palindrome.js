const solution = (str) => {
    
    const arr = [...str];
    const lowerArr = arr.map((el) => el.toLowerCase());
    const origin = lowerArr.join("");


    const comparision = [...lowerArr.reverse()];
    const joined = comparision.join("");

    
    if(origin === joined) return("YES");
    else return("NO");
    
}

console.log(solution("gooG")); 
console.log(solution("gDDG")); 
console.log(solution("gooog")); 
console.log(solution("godasadog")); 
console.log(solution("godasadoasdjkg")); 
console.log(solution("213029=dksa")); 
console.log(solution("found7, time: study; Yduts; emit, 7Dnuof")); 
