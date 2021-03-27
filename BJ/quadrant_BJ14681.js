const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line) {      
    
    input.push(line);               // enter 할 때마다 input에 [0], [1], [2], ... 으로 들어감

}).on("close", function() {         // ctrl + c 하면 실행되는 부분
    let x = Number(input[0]);
    let y = Number(input[1]);

    if (x > 0 && y > 0) {
        console.log(1);
    }
    
    if (x < 0 && y > 0) {
        console.log(2);
    }
    
    
    if (x < 0 && y < 0) {
        console.log(3);
    }
    
    
    if (x > 0 && y < 0) {
        console.log(4);
    }

    process.exit();
});

