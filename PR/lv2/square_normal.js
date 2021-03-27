function solution(w, h) {
    const wholeSquare = w * h;
    // w와 h의 최대공약수를 구해서  wholesquare - 최대공약수 가 답이다.
    let gcd = 0;

    const min = Math.min(w,h);
    for(let i = min; i > 0; i--) {
        if(w%i === 0 && h % i === 0) {
            gcd = i;
            break;
        }
    }

    const deletedSqaure = w + h - gcd;
    return wholeSquare - deletedSqaure;
}

solution(12, 8);