/*  "qwer" => "we"
    "abcde" => "c"
*/

const getMidString = (s) => {
    let result = '';
    const sLength = s.length-1;
    const index = Math.floor(sLength/2);
    if(sLength%2 === 0) {
        result = s[index];
    } else {
        result = s[index] + s[index+1];
    }
    return result;
}

console.log(getMidString("abcde"));





// qwer
// 0123
// length = 3
// length/2 = 1.5
// Math.floor(1.5) = 1
// qwer[1] = w
// length가 홀수면
// result = qwer[1] + qwer[1+1]


// abcde
// 01234
// legnth = 4
// length/2 = 2
// Math.floor(2) = 2
// abcde[2] = c
// length가 짝수면
// result = c
