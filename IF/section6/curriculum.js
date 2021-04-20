const solution = (required, curriculum) => {
  const r = required.split('');

  for (let i = 0; i < curriculum.length; i++) {
    if (r.indexOf(curriculum[i]) !== -1 && r.indexOf(curriculum[i]) !== 0)
      return 'no';
    else if (r.indexOf(curriculum[i]) === 0) r.shift();
  }

  if (!r.length) return 'yes';
};

console.log(solution('BAC', 'CBDAGE'));
