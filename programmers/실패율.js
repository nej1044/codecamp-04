function solution(N, stages) {
  var answer = [];
  let totalNum = stages.length

  for (let i = 1; i <= N; i++) {
    let failer = stages.filter(element => i === element).length
    let failRatio = 0
    if (failer === 0) {
      failRatio = 0
    } else {
      failRatio = failer / totalNum
    }
    totalNum -= failer
    answer.push({
      idx: i,
      ratio: failRatio
    })
  }

  answer.sort((a, b) => {
    if (a.ratio > b.ratio) {
      return -1
    } else if (a.ratio < b.ratio) {
      return 1
    } else {
      if (a.idx > b.idx) {
        return 1
      } else {
        return -1
      }
    }
  })

  return answer.map(element => element.idx);
}