function makeNumber(num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    if (i < num) {
      str = str + i + '-'
    } else {
      str = str + i
    }
  }
  console.log(str)
}