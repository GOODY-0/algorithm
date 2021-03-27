let isSymmetric = function (root) {
    let rootCopy = root;
    if (rootCopy.length === 1) return true;

    let branchRow = [];


    for (let i = 0; i < rootCopy.length; i++) {
        for (let j = 0; j < 2 ** i; j++) {
            branchRow.push(rootCopy.shift());
        }
        for(let k = 0; k < branchRow.length/2;  k++) {
            if(branchRow[k] !== branchRow[branchRow.length-1-k]) return false;
            else {
                branchRow = [];
                continue;
            }
        } 
    }
    return true;
};


console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));   // true
console.log(isSymmetric([1, 2, 2, null, 3, null, 3])); // false


// let isSymmetric = function (root) {
//     let rootCopy = root;
//     if (rootCopy.length === 1) return true;

//     let branchRow = [];


//     for (let i = 0; i < rootCopy.length; i++) {
//         for (let j = 0; j < 2 ** i; j++) {
//             branchRow.push(rootCopy.shift());
//         }
//         if(checkSymmetry(branchRow)) {
//             branchRow = [];
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

// let checkSymmetry = function (arr) {
//     for(let i = 0; i < arr.length / 2; i++) {
//        if(arr[i] !== arr[arr.length-1-i]) return false;
//     }

//     return true;
// }
