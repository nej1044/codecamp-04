function solution(s, n) {
  var answer = '';
  const UpperStr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const LowerStr = []
  for (let i = 0; i < UpperStr.length; i++) {
    LowerStr.push(UpperStr[i].toLowerCase())
  }
  const newArr = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (UpperStr.includes(s[i])) {
      newArr.splice(i, 1, UpperStr[(UpperStr.indexOf(s[i]) + n) % 26])
    } else if (LowerStr.includes(s[i])) {
      newArr.splice(i, 1, LowerStr[(LowerStr.indexOf(s[i]) + n) % 26])
    }
  }
  answer = newArr.join('')
  return answer;
}
