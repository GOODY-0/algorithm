// candles 배열내 원소 중 최댓값의 개수

function birthdayCakeCandles(candles) {
    const sortedCandles = candles.sort((a,b) => {return a-b});

    let tallestCandle = sortedCandles[sortedCandles.length-1];

    const tallestCandles = sortedCandles.filter((e) => {return e === tallestCandle;});

    console.log(tallestCandles.length);

}

const candles = [1,2,3,4,5,5,5,9,9,9,5,5,6,6,6,7,7,7];
birthdayCakeCandles(candles);