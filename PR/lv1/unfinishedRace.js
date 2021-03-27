

function solution(participant, completion) {
    let runners = {};
    
    participant.forEach((e) => {
        if(runners[e]) {
            runners[e]++;
        } else {
            runners[e] = 1;
        }
    })
    
    for(let i = 0; i < completion.length; i++) {
        runners[completion[i]]--;
    }

    for(let i in runners) {
        if(runners[i] === 1) {
            // console.log(i);
            return i;
        }
    }
}

const p1 = ["leo", "kiki", "eden"];
const p2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const p3 = ["mislav", "stanko", "mislav", "ana"];
const p4 = ["leo", "kiki", "eden", "kiki"];
const p5 = ["leo", "kiki", "eden", "kiki", "eden"];

const c1 = ["eden", "kiki"];
const c2 = ["josipa", "filipa", "marina", "nikola"];
const c3 = ["stanko", "ana", "mislav"];
const c4 = ["leo", "kiki", "eden"];
const c5 = ["kiki", "eden", "leo", "kiki"];

solution(p5, c5);