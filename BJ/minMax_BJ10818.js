const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
const realInput = [];


rl.on("line", function (line) {
    input.push(line);
    for (let i = 0; i < input.length; i++) {
        realInput[i] = input[i].split(" ");
    }
}).on("close", function () {
    let inputNum = [];
    for (let i = 0; i < realInput.length; i++)
        inputNum.push(convert2Num(realInput[i]));


    // const min = getMin(inputNum[1]);
    // const max = getMax(inputNum[1]);


    const answer = getMinMax(inputNum[1]);
    console.log(answer);
    process.exit();
})


function convert2Num(arr) {
    let result = [];
    arr.forEach(element => result.push(Number(element)));
    return result;
}


function getMinMax(arr) {
    let min;
    let max;
    // for (let i = 0; i < arr.length; i++) {
    //     if(!min) min = arr[i];
    //     if(min > arr[i]) {
    //         min = arr[i];
    //     }
    // }

    arr.forEach(function(element) {
        if(!min) min = element;
        if(!max) max = element;
        if(min > element) {
            min = element;
        }
        if(max < element) {
            max = element;
        }
    });
    return `${min} ${max}`;
}

// function getMax(arr) {
//     let max;

//     for(let i = 0; i < arr.length; i++) {
//         if(!max) max = arr[i];
//         if(max < arr[i]) {
//             max = arr[i];
//         }
//     }

//     return max;
// }