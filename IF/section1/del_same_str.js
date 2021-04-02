function solution(arr){
    const set = new Set(arr);
    const result = [...set];
    
    console.log(result);
    return result;

}
    solution(["good", "time", "good", "time", "student"]);      // [good, time, student]