/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false

    const str = x + "";
    const arr = str.split("");
    const reverse = arr.reverse();
    let answer = reverse.join("");
    answer = Number(answer);
    
    if(x === answer) return true;
    return false;

};

isPalindrome(121);  // true (121)
isPalindrome(-121);  // false (121-)
isPalindrome(10);  // false (01)
isPalindrome(-101);  // false (101-)
