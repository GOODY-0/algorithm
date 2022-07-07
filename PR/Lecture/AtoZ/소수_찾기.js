

function solution(n) {
   
    const isPrimeArray = [false, false, ...Array(n-1).fill(true)]
  
    for(let i = 2; i * i <= n; i++) {
        if(isPrimeArray[i]) {
            for(let j = 2; j <= n; j++) {
                const ij = i * j;
                if(ij > n) break; 
                isPrimeArray[ij] = false;
            }
        }
    }
    

    return isPrimeArray.filter(el=>el).length
}
