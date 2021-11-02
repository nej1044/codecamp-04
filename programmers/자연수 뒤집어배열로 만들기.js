function solution(n) {
  var answer = [];
  const arr = String(n).split('')
  for (let i = 0; i < arr.length; i++) {
    answer.push(Number(arr[i]))
  }
  answer.reverse()
  return answer;
}