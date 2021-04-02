function solution (arr) {
    const lengthList = arr.map(el => el.length);
    let index;

    const max = lengthList.reduce((acc, cur, idx) => {
        if(cur > acc) {
            acc=cur;
            index = idx; 
        }
        return acc;
    }, 0);

    console.log(arr[index]);
    return arr[index];
}

solution(["teacher", "time","student","beautiful",'good']); //beautiful