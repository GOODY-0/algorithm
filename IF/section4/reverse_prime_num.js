const solution = (numbers) => {
    const primes = [];

    const reverseNums = numbers.map((el) => {
        el += '';
        el = el.split('');
        el = el.reverse();
        el = el.join("");
        return (Number(el));
    });
   
    
    reverseNums.forEach((el) => {
        for(let i = 2; i < Math.sqrt(el); i++) {
            if(el % i === 0) return;
        }
        if(el !== 1) primes.push(el);
    });

    return primes;
}


const numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(numbers);  // [23, 2, 73, 2, 3];