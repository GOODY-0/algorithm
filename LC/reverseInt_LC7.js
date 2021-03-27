function reverse (x) {
   
        let str = x + '';
        const strArr = str.split("");
        let reversedArr = strArr.reverse();
        
        if(reversedArr.length > 1 && reversedArr[0] === "0") reversedArr.splice(0, 1);
        if(reversedArr[reversedArr.length-1] === "-") reversedArr.unshift(reversedArr.pop());
    

        let answer = reversedArr.join("");
        answer = Number(answer);
       
        if(answer > 0x7FFFFFFF) return 0;
        if(answer < -0x7FFFFFFF) return 0;
        return answer;

}



console.log([reverse(123), reverse(-123), reverse(120), reverse(0), reverse(2147483648)]); // 321 -321 21 0