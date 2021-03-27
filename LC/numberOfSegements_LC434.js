let countSegments = function(s) {
    let answer = 0;
    let segments = s.split(" ");
    answer = segments.length;
    segments.forEach((el) => {
        if(el === "") answer--;
    });

    console.log(answer);
    return answer;
};

countSegments("Hello, my name is John");
countSegments("Of all the gin joints in all the towns in all the world,   ");