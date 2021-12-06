function solution(n, lost, reserve) {
  var answer = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  // 체육복을 잃어버리지 않은 학생
  answer = n - lost.length;
  for (let i = 0; i < lost.length; i++) {
    // 체육복을 잃어버려 체육복이 없는 학생
    if (reserve.indexOf(lost[i]) === -1) {
      continue;
    } else if (reserve.indexOf(lost[i]) !== -1) {
      // 체육복을 잃어버렸지만, 체육복이 1개인 학생
      reserve.splice(reserve.indexOf(lost[i]), 1);
      lost.splice(i, 1);
      i--;
      answer++;
    }
  }
  // 체육복을 잃어버리지 않았고, 체육복이 2개인 학생에게 빌리기
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      lost.splice(i, 1);
      i--;
      answer++;
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      lost.splice(i, 1);
      i--;
      answer++;
    }
  }

  return answer;
}

// 멘토님 풀이
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => lost.includes(student) === false)
    .sort((a, b) => a - b);
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const student = lost[i];

    if (reserve.includes(student - 1)) {
      answer++;
    } else if (reserve.includes(student + 1)) {
      reserve.splice(reserve.indexOf(student + 1));
      answer++;
    }
  }
  return answer;
}

// 메서드로 풀기
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => lost.includes(student) === false)
    .sort((a, b) => a - b);
  let answer = n - lost.length;

  lost.forEach((student) => {
    const prev = reserve.indexOf(student - 1);
    const next = reserve.indexOf(student + 1);

    if (prev !== -1) {
      reserve.splice(prev, 1);
      answer++;
    } else if (next !== -1) {
      reserve.splicd(next, 1);
      answer++;
    }
  });
  return answer;
}
