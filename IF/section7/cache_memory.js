const solution = (s, nums) => {
  const storage = new Array(s);
  nums.forEach((num) => {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i] === num) {
        storage.unshift(num);
        storage.splice(i + 1, 1);
        break;
      } else if (i === storage.length - 1) {
        storage.unshift(num);
        storage.pop();
      }
    }
  });

  console.log(storage);
};

solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]); // 7 5 3 2 6
