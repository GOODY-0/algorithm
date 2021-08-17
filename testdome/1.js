function createCheckDigit(membershipId) {
  let result = 0;
  if (membershipId.length === 1) return membershipId;

  let temp = membershipId;

  while (temp.length !== 1) {
    temp = getSum(temp);
  }

  return Number(temp);
}

function getSum(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }

  return result + '';
}

console.log(createCheckDigit('55555'));
