function solution(num) {
  var answer = 0;
  let runtime = 0;
  for (let i = 1; i < 500; i++) {
    if (num % 2 === 0) {
      num = num / 2
      runtime++
    } else if (num === 1) {
      break;
    } else {
      num = (num * 3) + 1
      runtime++
    }
  }
  if (num === 1) {
    answer = runtime
  } else {
    answer = -1
  }
  return answer;
}