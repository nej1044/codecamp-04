function solution(N, stages) {
  var answer = [];
  let failP = new Array(N)
  let player = new Array(N)
  const notSort = []
  const sorted = []

  for (let i = 0; i < N; i++) {
    failP[i] = 0
    player[i] = 0
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < stages.length; j++) {
      // 문제를 도달해서 풀었다면
      if (stages[j] > i + 1) {
        player[i]++
      } else if (stages[j] === i + 1) {
        // 문제를 도달해서 못풀었다면
        player[i]++
        failP[i]++
      }
    }
  }
  // 각 문제의 실패율
  for (let i = 0; i < player.length; i++) {
    notSort[i] = failP[i] / player[i]
    sorted[i] = failP[i] / player[i]
  }

  sorted.sort((a, b) => b - a)

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < notSort.length; j++) {
      if (sorted[i] === notSort[j]) {
        if (!answer.includes(j + 1)) {
          answer.push(j + 1)
        }
      }
    }
  }
  return answer;
}