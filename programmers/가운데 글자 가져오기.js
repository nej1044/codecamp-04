function solution(s) {
  let answer = '';
  if (s.length % 2 === 0) {
    answer = s[(s.length / 2) - 1] + s[(s.length / 2)]
  } else {
    answer = s[(s.length - 1) / 2]
  }
  return answer;
}