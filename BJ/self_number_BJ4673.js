function d (num) {
    const num2Str = num + '';
    const arr = num2Str.split("");
    const numberedArr = arr.map((e) => Number(e));
    const arrSum = numberedArr.reduce((acc,cur) => acc += cur);
    const nextNum = num + arrSum;
    numbers.push(nextNum);
}

let numbers = [];
for(let i = 1; i <= 10000; i++) {
    d(i);
}
numbers.sort((a,b) => a-b);
for(let i = 1; i <= 10000; i++) {
    if(numbers.indexOf(i) === -1) {
        console.log(i);
    }
}
