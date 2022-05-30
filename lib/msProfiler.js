const msProfiler = (func) => {
  console.log("------------------- Millisecond profiler initiated -------------------");
  const start = new Date().getTime();
  func();
  const end = new Date().getTime();
  console.log(`time : ${end - start} ms`);
  console.log("------------------- Millisecond profiler ended -------------------");
}


module.exports = {
  msProfiler
}

// const exampleFunc = () => {
//   const result = [];
//   for(let i = 0; i < 100000000; i++) {
//     result.push(i);
//   }
//   return result;
// }
// msProfiler(exampleFunc);