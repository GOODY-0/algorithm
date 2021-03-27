function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleCount = 0;
    let orangeCount = 0;

    for(let i = 0; i < apples.length; i++) {
       const appleDropZone = a + apples[i];
       if(appleDropZone >= s && appleDropZone <= t) appleCount++;
    }

    for(let j = 0; j < oranges.length; j++) {
        const orangeDropZone = b + oranges[j];
        if(orangeDropZone >= s && orangeDropZone <= t) orangeCount++;
     }

    console.log(appleCount);
    console.log(orangeCount);

}

const s = 7 // home start
const t = 11 // home end
const a = 5 // apple tree
const b = 15 // orange tree
const apples = [-2, 2, 1];  // apple drop distance from tree
const oranges = [5, -6];    // orange drop distance from tree

countApplesAndOranges(s,t,a,b,apples,oranges);
