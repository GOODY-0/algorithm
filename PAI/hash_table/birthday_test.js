function birthdayTest (testCnt, peopleCnt) {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }


    let total = 0;
    for(let i = 0; i < testCnt; i++) {
        let sameBirthday = 0;
        const birthdays = new Map();
        for(let i = 0; i < peopleCnt; i++) {
          const myBirthday = getRandomInt(1, 365);
          if(birthdays.has(myBirthday)) {
                sameBirthday++;
                break;
          } else {
                birthdays.set(myBirthday, myBirthday)
          }
        }
        sameBirthday > 0 && total++;
    }


    return total;
}
