const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if(a > b) {
    console.log(">");
}

if(a < b) {
    console.log("<");
}

if(a === b) {
    console.log("==");
}