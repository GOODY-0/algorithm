// 10진수 이하만 가능
function radixConversion(number, radix) {
  let copyNum = number;
  const remainders = [];

  while (copyNum >= 1) {
    remainders.push(Math.floor(copyNum % radix) + '');
    copyNum = Math.floor(copyNum / radix);
  }

  return remainders.reverse().join('');
}

console.log(radixConversion(423, 10));
