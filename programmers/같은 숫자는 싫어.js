function solution(arr) {
  const answer = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i])
    }
  }
  return answer;
}

// 효율성 테스트 실패
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr;
}