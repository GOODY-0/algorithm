// 배열 a의 원소들을 약수로 가지면서,
// 동시에 배열 b의 원소들의 약수인 숫자는 몇 개 일까?

// function getTotalX(a, b) {
//     let validCount = 0;
    
//     for (let x = 1; x <= 100; x++) {
//         if (a.every(int => (x % int == 0))) {
//             if (b.every(int => (int % x == 0))) {
//                 validCount++;
//             }
//         }
//     }
//     console.log(validCount);
//     return validCount;
// }

const a1 = [2, 4];
const b1 = [16, 32, 96];

const a2 = [2, 6];
const b2 = [24, 36];


const b3 = [12, 8, 10];





function getTotalX (a, b) {
    let validCount = 0;

    for(let x = 1; x <= 100; x++) {
        if(a.every(element =>  (x % element === 0))) {
            if(b.every(element =>  (element % x === 0))) {
                validCount++;
            }
        } 
    }
    console.log(validCount);
    return validCount;
}

getTotalX(a1, b1);