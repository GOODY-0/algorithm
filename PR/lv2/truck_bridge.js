function solution(bridge_length, weight, truck_weights) {
    const trucks = truck_weights.map((truck) => {
        return {weight: truck, pos : 1};
    })
    let currentWeight = 0;
    let time = 0;
    let passing = [];

    while(trucks.length > 0 || passing.length > 0) {
        time++

        passing.forEach((truck) => {
            truck.pos++;   
        });
        
        if(passing.length > 0) {
            if(passing[0].pos > bridge_length) {
                currentWeight -= passing[0].weight;
                passing.shift();
            }
        }


        if(trucks.length > 0) {
            if(currentWeight + trucks[0].weight <= weight) {
                currentWeight += trucks[0].weight;
                passing.push(trucks.shift());
            }
        }

        
       
    }
    return time;
    // console.log(time);
}


console.log(solution(2,10,[7,4,5,6]));       // 8
console.log(solution(100,100,[10]));       // 8
console.log(solution(100,100,[10,10,10,10,10,10,10,10,10,10]));       // 8



// function solution(bridge_length, weight, truck_weights) {
//     var answer = 0;
//     let time = 0;
//     let currentWeight = 0;  // 현재 다리 위 트럭들의 무게
//     const waiting = truck_weights;
//     const passing = [];
//     const passed = [];
 
//     while(waiting.length > 0 || passing.length > 0) {
//         time++;
        
//         if(currentWeight + waiting[0] <= weight){
//             const passingTruck = waiting.shift();
//             currentWeight += passingTruck;
//             passing.push(passingTruck);
//         } 
//         if(time !== 0 && time % bridge_length === 0){
//             const passedTruck = passing.shift();
//             currentWeight -= passedTruck;
//             passed.push(passedTruck);
//         } 
//         if(!passing.length && !waiting.length) {
//             return time;
//         }
//     }

//     // currentWeight에 waiting의 맨 앞 원소를 더한게 weight보다 작으면
//     // waiting 에서 shift() 한 게 passing에 push
//     // time++;

//     return answer;
// }