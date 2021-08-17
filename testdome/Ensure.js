function ensure(value) {
  if (value === undefined) throw Error;
  else return value;
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}
