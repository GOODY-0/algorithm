input = ["210"];
const num = Number(input[0]);
if (num < 100) {
    console.log(num);
}
if (num >= 100) {
    let hansu = 99;
    for (let i = 100; i <= num; i++) {
        const str = i + "";
        const arr = str.split("");
        if ((arr[0] - arr[1]) === (arr[1] - arr[2])) {
            hansu++;
        }
    }
    console.log(hansu);
}
