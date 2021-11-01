function makeOdd(num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) continue;
    str = str + i
  }
  console.log(str)
}