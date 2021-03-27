const { time } = require("console");

function timeConversion(s) {
    const beforeArr = s.split(":");
    const beforeHour = Number(beforeArr[0]);
    let afterHour = "0" + beforeHour ;
    
    if(beforeHour < 12 && beforeArr[2].slice(2,4) === "PM") {
        afterHour = 0;
        afterHour = beforeHour + 12 + "";
    }
  
    if(beforeHour === 12 && beforeArr[2].slice(2,4) === "AM") {
        afterHour = 0;
        afterHour += "0";
    }

    if(beforeHour === 12 && beforeArr[2].slice(2,4) === "PM") {
        afterHour = 12;
    }
    const afterSec = beforeArr[2].slice(0,2);
    const afterArr = [afterHour, beforeArr[1], afterSec];
    let string = afterArr.join(":");
    // // let string = arr.join(":");
    // console.log(beforeArr[1]);
    console.log(string);
    return string;
}


const sample1 = "12:01:00PM";   // 12:01:00
const sample2 = "12:01:00AM";   // 00:01:00
const sample3 = "07:05:45PM";   // 19:05:45
const sample4 = "07:05:45AM";   // 07:05:45

timeConversion(sample4);