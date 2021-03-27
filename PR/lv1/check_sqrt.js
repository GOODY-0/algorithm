function solution(n) {
    const x = Math.sqrt(n);
    if(x === Math.floor(x)) {
        return (x+1)**2
    } else {
        return -1;
    }
}