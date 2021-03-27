function dayOfProgrammer(year) {
    const leapYearDays = [31, 29, 31, 30, 31, 31, 30, 31, 31];
    const yearDays = [31, 28, 31, 30, 31, 31, 30, 31, 31];
    let thisYearDays;
    

    if (year > 1917) {  // 그레고리안 력
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            thisYearDays = leapYearDays;
        } else {
            thisYearDays = yearDays;
        }
    }

    if (year <= 1917) {  // 줄리안 력
        if (year % 4 === 0) {
            thisYearDays = leapYearDays;
        } else {
            thisYearDays = yearDays;
        }
    }

    if (year === 1918) {
        return `26.09.${year}`;
    }

    const programmerDay = thisYearDays[1] === 28 ? `13.09.${year}` : `12.09.${year}`;
    return (programmerDay);
}


dayOfProgrammer(1800);