function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (answer.includes(numbers[i] + numbers[j]) !== true) {
          answer.push(numbers[i] + numbers[j])
        }
      }
    }
  }
  answer.sort((a, b) => a - b)
  return answer;
}