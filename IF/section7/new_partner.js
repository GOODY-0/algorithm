const solution = (kids) => {
  const hyunsoo = [];
  const partner = [];
  for (let i = 0; i < kids.length; i++) {
    if (kids[i] > kids[i + 1]) hyunsoo.push({ height: kids[i], number: i + 1 });
    if (kids[i] < kids[i - 1]) partner.push({ height: kids[i], number: i + 1 });
  }

  let max = 0;
  let hyunsooNum;
  let min = 181;
  let partnerNum;
  for (let i = 0; i < hyunsoo.length; i++) {
    if (hyunsoo[i].height > max) {
      hyunsooNum = hyunsoo[i].number;
      max = hyunsoo[i].height;
    }
    if (partner[i].height < min) {
      partnerNum = partner[i].number;
      min = partner[i].height;
    }
  }

  console.log(hyunsooNum, partnerNum);
  return [hyunsooNum, partnerNum];
};

solution([120, 125, 152, 130, 135, 135, 143, 127, 160]); // 3 8
solution([152, 125, 127, 130, 135, 135, 143, 120, 160]);
// 앞에꺼보다 크고 뒤에꺼보다 크면 현수?
// 앞에꺼보다 작고 뒤에꺼보다 작으면 파트너

// 뒤에꺼보다 크면 일단 현수 후보군에 push
// 앞에거보다 작으면 일단 짝꿍 후보군에 push
