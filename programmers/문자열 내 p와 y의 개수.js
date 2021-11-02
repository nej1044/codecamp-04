function solution(s) {
  var answer = true;
  const p = s.toLowerCase().split('').filter(element => 'p' === element).length
  const y = s.toLowerCase().split('').filter(element => 'y' === element).length
  if (p === y) {
    answer = true
  } else {
    answer = false
  }

  return answer;
}


