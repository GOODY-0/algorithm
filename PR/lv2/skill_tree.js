function solution(skill, skill_trees) {
    var answer = 0;
    let skillArray = [];
    let stack = [];
    let idx = 0;


    skill_trees.forEach((skillTree) => {
        skillArray = [...skill];
        let skillTreeArr = [...skillTree];

        skillTreeArr = skillTreeArr.filter((el) => {
            return skillArray.includes(el);
        });
       
        // skillArray.forEach((el) => {
        //     if(el === skillTreeArr[0]) skillTreeArr.shift();
        // })
        for(let i = 0; i < skillArray.length; i++) {
            if(skillArray[i] === skillTreeArr[0]) skillTreeArr.shift();
            else break;
        }

        if(skillTreeArr.length === 0) answer++;

    })

    console.log(answer);

    return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);        // 2
// solution("CBD", ["AECB"]);        // 2