const solution = (str) => {
    let count = 0;

    for(let char of str) {
        if(char === "(") count++;
        else if (char === ")") count--;
    }

    return count===0? 'yes' : 'no';
  
}

console.log(solution("(()((()))()())"));    //no
