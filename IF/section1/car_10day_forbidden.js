function solution(day, car) {
    let violate = 0;

    const carString = car.map(el => el + ''); 
    const dayString = day + '';

    carString.forEach((el) => {
        if (el[el.length-1] === dayString) violate++;
    })

    return violate;
}

solution(3, [25,23,11,47,53,17,33]);        // 3
solution(0, [12, 20, 54, 30, 87, 91, 30]);        // 3