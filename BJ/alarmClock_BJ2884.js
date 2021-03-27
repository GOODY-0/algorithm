const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ');

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

// 분이 45보다 크면 그냥 분에서 45를 빼면 됌
// 분이 45보다 작으면 분에서 15를 더하고 시간은 -1 하면 됌
// 근데 이 때 만약 시간이 0보다 작으면 시간을 23으로 바꿔

if(minute < 45) {
    minute += 15;
    hour -= 1;
    if(hour < 0) {
        hour = 23;
    }
} else {
    minute -= 45;
}

console.log(`${hour} ${minute}`);