function solution(n, m) {
  var answer = [];
  const bigArr = []

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      bigArr.push(i)
    }
  }
  answer.push(bigArr[bigArr.length - 1])
  answer.push((n * m) / bigArr[bigArr.length - 1])
  return answer;
}