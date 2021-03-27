const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = "";

rl.on("line", function (line) {
    input += (line);
    rl.close();
}).on("close", function () {
    const obj = {}
    for(let i = 0; i < input.length; i++) {
        if(!obj[input[i].toLowerCase()]) obj[input[i].toLowerCase()] = 1;
        else obj[input[i].toLowerCase()] ++;
    }

    const keyArr = Object.keys(obj);
    const valueArr = Object.values(obj);

    let max = Math.max(...valueArr);
    if(valueArr.lastIndexOf(max) === valueArr.indexOf(max)) {
        console.log(keyArr[valueArr.indexOf(max)].toUpperCase());
    } else {
        console.log("?");
    }
    process.exit();
});
