const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    console.log(line.charCodeAt());
    rl.close();
}).on("close", function () {
    process.exit();
})

