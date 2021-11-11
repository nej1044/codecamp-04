function solution(x, n) {
  var answer = [];
  let newX = x
  for (let i = 0; i < n; i++) {
    answer.push(newX)
    newX += x
  }
  return answer;
}

// 메서드 사용해서 풀어보기
function solution(x, n) {
  const answer= new Array(n).fill(1).map((num, i) => { return (num+1)*x})

  return answer
}