// n : number of prisoners
// m : number of candies
// s : chair number to begin passing out candies from
// 마지막 캔디를 먹게 될 죄수는?

function saveThePrisoner(n, m, s) {

    let last = s + (m % n) - 1;

    if (last > n) last -= n;
    else if (last === 0) last = n;

    return console.log(last);


}

saveThePrisoner(984873585, 997634055, 103050157);



// if(m>n) {
//     s += m%n-1;
//     if(s > n) {
//         s = s-n;
//     }
// } else {

//     s += m-1;
//     if(s > n) {
//         s = s-n;
//     }
// }
// console.log(s);






// s += (m%n)-1;
// if(s+1 === m) s += 1;
// if(s > n) s -= n; 
// console.log(s);
