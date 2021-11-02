function solution(s) {
  var answer = '';
  const newS = []
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || newS[i - 1] === ' ' || newS[i - 1] === s[i - 1].toLowerCase()) {
      newS.push(s[i].toUpperCase())
    } else if (newS[i - 1] === s[i - 1].toUpperCase()) {
      newS.push(s[i].toLowerCase())
    } else if (s[i] === ' ') {
      newS.push(' ')
    }
  }
  answer = newS.join('')
  return answer;
}