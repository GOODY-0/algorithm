const solution = (num) => {
  const answer = [];
  let result = '';
  const arr = new Array(num);
  arr.fill(1);

  const DFS = (dt) => {
    if (dt > num) {
      answer.push(result);
      result = '';
      return;
    } else {
      if (arr[dt]) {
        result += dt;
      } else {
        arr[dt] = 1;
      }
    }

    DFS(dt + 1);
    DFS(dt + 1);
  };

  DFS(0);
  console.log(answer, arr);
};

solution(3); // [ "123", "12", "13" , "1" ,  "23" , "2" , "3" ]

/*
                                      0                
                 1(o)                              1(x)           
          2(o)          2(x)                 2(o)       2(x)             
      3(o)  3(x)      3(o)  3(x)         3(o)  3(x)   3(o)  3(x)

*/
