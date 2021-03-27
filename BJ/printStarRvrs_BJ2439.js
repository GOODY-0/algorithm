const { count } = require("console");
const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input;

rl.on("line", function(line) {      
    
    input = line;             

}).on("close", function() {         
    let num = Number(input);
    let text = "";
    let countBlank = num-1;
    let countStar = 1;

    while(num >= countStar) {
        for(let i = 0; i < countBlank; i++) {
            text += " ";
        } for(let i = 0; i < countStar; i++) {
            text += "*";
        } text += "\n";
        countStar++;
        countBlank--;
    }

    text = text.slice(0,-1);
    console.log(text);

    process.exit();
});