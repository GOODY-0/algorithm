function solution(s) {
  var answer = 0;
  let minLength = s.length;
  let stack = '';
  const bundleSizes = [];

  // 몇개 단위로 묶을지 계산해서 bundleSizes 에 push
  for (let i = 0; i < s.length; i++) {
    stack += s[i];
    const back = s.slice(stack.length, stack.length * 2);
    if (back === stack) bundleSizes.push(stack.length);
  }

  // 압축이 하나도 되지 않았을 경우
  if (bundleSizes.length === 0) return minLength;

  // 압축 사이즈별 문자열 길이 계산
  bundleSizes.forEach((size) => {
    let i = 0;
    let result = '';
    const bundleResults = [];
    while (i <= s.length) {
      const bundle = s.slice(i, i + size);
      bundleResults.push(bundle);
      i += size;
    }
    let lastBundle;
    let cnt = 1;
    bundleResults.forEach((bundle) => {
      if (bundle === lastBundle) {
        cnt++;
      } else if (cnt !== 1) {
        result += cnt + bundle;
        cnt = 1;
      } else {
        result += bundle;
      }
      lastBundle = bundle;
    });
    minLength = result.length > minLength ? minLength : result.length;
  });

  return minLength;
}
