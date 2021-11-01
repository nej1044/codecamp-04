function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    if (isNaN(Number(s)) === true || s.includes('e') !== false) {
      answer = false
    }
  } else {
    answer = false
  }

  return answer;
}