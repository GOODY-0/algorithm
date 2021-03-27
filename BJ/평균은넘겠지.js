const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function() {
    const caseNum = input[0];
    const classList = input.slice(1);
    
    for(let i = 0; i < classList.length; i++) {
        let goodStdnt = 0;
                    const _class = classList[i].split(" ");
                    const numberedClass = _class.map((e) => Number(e));
                    const stdntNum = numberedClass[0];
                    // console.log(numberedClass);

                    const scoreTotal = numberedClass.reduce((acc, cur) => acc += cur) - stdntNum;
                    const scoreAvg = scoreTotal / stdntNum;

                    // console.log(scoreAvg);

                    for(let j = 1; j <= numberedClass.length; j++) {
                        if(numberedClass[j] > scoreAvg) goodStdnt++;
                    }

                    const goodStdntRate = (goodStdnt / stdntNum) * 100;
                    console.log(`${goodStdntRate.toFixed(3)}%`);
    }






    process.exit();
})