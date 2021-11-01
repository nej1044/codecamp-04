function countLetter(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'A' || str[i] === 'a') {
      count++
    }
  }
  console.log(count)
}