function solution(n) {
  var answer = 0;
  n=String(n)
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i])
  }

  return answer;
}

//메소드 사용해서 풀어보기
function solucion(n) {
  let answer = 0
  
  String(n).split('').forEach(num => answer += Number(num))
  return answer
}