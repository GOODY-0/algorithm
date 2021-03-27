function solution(s) {

    let answer = '';
    const arr = s.split(" ");

    const newArr = arr.map((el) => {
        if(el !== "") {
            const elArr = el.split("");
            for(let i = 0; i < elArr.length; i++) {
                if(i % 2 === 0) {
                    elArr[i] = elArr[i].toUpperCase();
                } else {
                    elArr[i] = elArr[i].toLowerCase();
                }
            }
            el = elArr.join("");
            return el;
        }
    });

    let str = newArr.join();
    for(let i = 0; i < str.length; i++) {
        str = str.replace(',', ' ');
    }
    console.log(str);
    // console.log(newArr);
    return answer;
}

const string = "hello          everyone"
const string1 = "try    hello   world";
const string2 = "my name is junzero";
const string3 = "Hello eVeryone";


solution(string3);