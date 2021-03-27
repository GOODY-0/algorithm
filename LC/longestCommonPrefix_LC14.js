// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs.join();

    let idx = 0;
    
    while (idx < strs[0].length) {
        let targetChar = strs[0][idx]; // f -> l -> o -> w -> ...
        for (let i = 1; i < strs.length; i++) {
            if (targetChar !== strs[i][idx]) {
                return prefix;
            }
        }
        prefix += targetChar;
        idx++;
    }
    return prefix;
};


const strs1 = ["flower", "flow", "flight"]; // "fl"
const strs2 = ["dog", "racecar", "car"];    // ""
const strs3 = ["a"];    // "a"
const strs4 = ["", ""];    // ""
const strs5 = ["flower", "flower", "flower", "flower"];    // "flower"
const strs6 = ["dedicated", "deddy", "dedmon", "deddwer"];    // "ded"



console.log(longestCommonPrefix(strs6));