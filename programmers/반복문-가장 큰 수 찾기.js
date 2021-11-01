function bigNum(str) {
  let biggest = '0';
  for (let i = 0; i < str.length; i++) {
    if (str[i] < biggest) continue
    biggest = str[i]
  }
  console.log(biggest)
}