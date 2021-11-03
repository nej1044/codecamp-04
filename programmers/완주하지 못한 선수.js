function solution(participant, completion) {
  var answer = '';
  const pt = participant.sort();
  const ct = completion.sort();
  for (let key in pt) {
    if (pt[key] !== ct[key]) {
      answer = pt[key]
      break;
    }
  }
  return answer;
}