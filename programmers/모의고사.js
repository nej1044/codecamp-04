function solution(answers) {
  const answer = [];
  const tester1 = [1, 2, 3, 4, 5];
  const tester2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const tester3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const correct = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === tester1[i % tester1.length]) {
      correct[0] += 1
    }
    if (answers[i] === tester2[i % tester2.length]) {
      correct[1] += 1
    }
    if (answers[i] === tester3[i % tester3.length]) {
      correct[2] += 1
    }   
  }
    
  const maxCorrect = Math.max(correct[0], correct[1], correct[2])
    
  const result = correct.forEach((curr, idx) => {
    if (curr === maxCorrect) {
      answer.push(idx+1)
    }
  })
    
  return answer;
}
