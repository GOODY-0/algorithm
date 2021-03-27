function solution(s, n) {
    const ABC = ["A","B","C","D","E","F","G","H","I","J","K","L",'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const abc = ABC.map((el) => el.toLowerCase());
    let answer = "";
    const arr = s.split("");
    
    arr.forEach((el) => {
        if(ABC.indexOf(el) !== -1) {
            const idx = ABC.indexOf(el);
            let newIdx = idx + n;
            if(newIdx >= ABC.length) newIdx = newIdx - ABC.length; 
            answer += ABC[newIdx];
        }
        else if(abc.indexOf(el) !== -1) {
            const idx = abc.indexOf(el);
            let newIdx = idx + n;
            if(newIdx >= abc.length) newIdx = newIdx - abc.length; 
            answer += abc[newIdx];
        } else {
            answer += el;
        }
    })

    console.log(answer);
}

solution("AB", 1); // "BC"
solution("z", 1); // "a"
solution("a B z", 4); // "e F d"
solution("ZzYy", 25); // "e F d"



