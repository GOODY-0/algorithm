function solution(numbers, hand) {
    var answer = '';
    const leftKeyPad = [1, 4, 7, "*"];
    const rightKeyPad = [3, 6, 9, "#"];
    const midKeyPad = [2, 5, 8, 0];

    const nums = numbers;
    let currentLPos = '*';
    let currentRPos = '#';

    nums.forEach((el) => {

        if(el === 1 || el === 4 || el === 7) {
            currentLPos = el;
            answer += "L";
        }
        else if(el === 3 || el === 6 || el === 9) {
            currentRPos = el;
            answer += "R";  
        } else {
            
            const leftDistance = leftKeyPad.indexOf(currentLPos) !== -1 ? Math.abs(leftKeyPad.indexOf(currentLPos) - midKeyPad.indexOf(el)) : Math.abs(midKeyPad.indexOf(currentLPos) - midKeyPad.indexOf(el)) - 1; 
            const rightDistance = rightKeyPad.indexOf(currentRPos) !== -1 ? Math.abs(rightKeyPad.indexOf(currentRPos) - midKeyPad.indexOf(el)) : Math.abs(midKeyPad.indexOf(currentRPos) - midKeyPad.indexOf(el)) - 1; 

            if(leftDistance === rightDistance) {
                if(hand === "left") {
                    currentLPos = el;
                    answer += "L";
                } else {
                    currentRPos = el;
                    answer += "R";
                }
            } else {

                if(rightDistance > leftDistance) {
                    answer += "L";
                    currentLPos = el;
                } else {
                    answer += "R";
                    currentRPos = el;
                }
            }
        }
    });

    return answer;
}

solution([1,3,4,5,8,2,1,4,5,9,5], "right");     // "LRLLLRLLRRL"
solution([7,0,8,2,8,3,1,5,7,6,2], "left");     // "LRLLRRLLLRR"
solution([1,2,3,4,5,6,7,8,9,0], "right");     // "LLRLLRLLRL"