function solution(priorities, location) {
    let answer;

    priorities = priorities.map((el) => {
        return {goal: false, value: el};
    });

    priorities[location].goal = true;



    const printed = [];
    let flag = false;

    while(priorities.length > 0) {

        let current = priorities.shift();
        
        
        for (let i = 0; i < priorities.length; i++) {
            if (priorities[i].value > current.value) {
                priorities.push(current);
                flag = false;
                break;
            } else flag = true;
        }
        if(flag) printed.push(current);
    }

    printed.forEach((el, idx) => {
        if(el.goal) answer = idx+1;
    })
        
    console.log(answer);
    return answer;
}

