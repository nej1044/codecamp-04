function solution(x, n) {
  var answer = [];
  let newX = x
  for (let i = 0; i < n; i++) {
    answer.push(newX)
    newX += x
  }
  return answer;
}