function solution(record) {
  var answer = [];
  const userNameInfo = new Map();
  const actionMap = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  // 유저 아이디-이름 매핑
  record.forEach((info) => {
    const arr = parse(info);
    arr[2] && userNameInfo.set(arr[1], arr[2]);
  });

  const result = [];
  for (let i = 0; i < record.length; i++) {
    const arr = parse(record[i]);
    const action = actionMap[arr[0]];
    if (!action) continue;
    const name = userNameInfo.get(arr[1]);
    result.push(`${name}${action}`);
  }

  console.log(result);

  return result;
}

function parse(str) {
  const arr = str.split(' ');
  return arr;
}

solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']);
