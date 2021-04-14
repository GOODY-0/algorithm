const solution = (wordA, wordB) => {
    const arrA = wordA.split("");
    const arrB = wordB.split("");
    let answer = 'YES';
    let mapA = new Map();
   

    arrA.forEach((el) => {
        if(mapA.has(el)) mapA.set(el,mapA.get(el)+1);
        else mapA.set(el, 1); 
    });

    arrB.forEach((el) => {
        if(!mapA.has(el) || mapA.get(el) === 0) answer = "NO";
        mapA.set(el, mapA.get(el)-1);
    });

    
    console.log(mapA, answer);
    return answer;
    
    
}

solution("AbaAeCe", "baeeACA"); // YES



const solution2 = (wordA, wordB) => {
    const arrA = wordA.split("");
    const arrB = wordB.split("");
    arrA.sort((a,b) => b.charCodeAt() - a.charCodeAt());
    arrB.sort((a,b) => b.charCodeAt() - a.charCodeAt());
    const answerA = arrA.join("");
    const answerB = arrB.join("");
    
    if(answerA === answerB) return ("YES");
    else return ("NO");
    
}