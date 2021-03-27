const { getMaxListeners } = require("process");
const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let realInput = [];

rl.on("line", function(line) {
    input.push(line);
    for (let i = 0; i < input.length; i++) {
        realInput[i] = input[i].split(" ");
    }
}).on("close", function() {
    
    const subjectNum = Number(realInput[0]);
    let subjects = realInput[1];
    subjects = convert2Num(subjects);

    getAverage(subjects);


    console.log(subjects);
    process.exit();
})

function convert2Num(arr) {
    let result = [];
    arr.forEach(element => result.push(Number(element)));
    return result;
}

function getAverage(arr) {
    let result = [];
    const max = getMax(arr);

    for(let i = 0; i < arr.length; i++) {
        result.push((arr[i] / max) * 100);
    }

    //result의 평균을 구하라.
    sumArr = result.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    const average = sumArr/result.length;
    
    console.log(average);
}

function getMax(arr) {
    let max;
    for(let i = 0; i < arr.length; i++) {
        if(!max) max = arr[i];
        if(max < arr[i]) max = arr[i];
    }
    return max;
}