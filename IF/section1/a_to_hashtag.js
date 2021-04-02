function solution(str) {
    const regex = /[A-Z]/;
    let arr = str.split("");

    for(let i = 0; i < arr.length; i++) {
        const isUpperCase = regex.test(arr[i]);
        if(!isUpperCase) return;
        else if(arr[i] === "A") arr.splice(i,1,'#');
    }
    arr = arr.join();
    return arr;
}

solution('BANANA'); // B#N#N#