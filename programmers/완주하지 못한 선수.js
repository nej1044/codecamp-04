function solution(participant, completion) {
  var answer = "";
  const pt = participant.sort();
  const ct = completion.sort();
  for (let key in pt) {
    if (pt[key] !== ct[key]) {
      answer = pt[key];
      break;
    }
  }
  return answer;
}

// 메서드로 풀기
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, idx) => {
    return name !== completion[idx];
  });
  return answer[0];
}
