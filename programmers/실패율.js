function solution(N, stages) {
  var answer = [];
  let newAnswer = []

  for (let i = 0; i < N; i++) {
    let s = 0
    let d = 0
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] > i + 1) {
        d++
        answer[i] = Number(s) / Number(d)
      } else if (stages[j] === i + 1) {
        s++
        d++
        answer[i] = Number(s) / Number(d)
      } else if (!stages.includes(i + 1)) {
        answer[i] = 0
      }
    }
  }
  for (let k = 0; k < N; k++) {
    let max = 0
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] > max && !newAnswer.includes(i + 1)) {
        max = answer[i]
      }
    }
    for (let j = 0; j < N; j++) {
      if (answer[j] === max && !newAnswer.includes(j + 1)) {
        newAnswer.push(j + 1)
      }
    }
  }

  return newAnswer;
}