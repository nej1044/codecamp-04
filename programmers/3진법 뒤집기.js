function solution(n) {
  var answer = 0;
  // 3진법 변환
  n = n.toString(3)

  // 3진법 reverse
  n = n.split('')
  n.reverse()
  n = n.join('')

  // 10진법표현
  answer = parseInt(n, 3)

  return answer;
}