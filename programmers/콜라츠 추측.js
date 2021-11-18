function solution(num) {
  var answer = 0;
  let runtime = 0;
  for (let i = 1; i < 500; i++) {
    if (num % 2 === 0) {
      num = num / 2;
      runtime++;
    } else if (num === 1) {
      break;
    } else {
      num = num * 3 + 1;
      runtime++;
    }
  }
  if (num === 1) {
    answer = runtime;
  } else {
    answer = -1;
  }
  return answer;
}

// while문 사용하기
function solution(num) {
  let count = 0;
  while (num != 1) {
    if (count >= 500) {
      return -1;
    }
    count++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return count;
}

// 메서드로 풀어보기
function solution(num) {
  let count = 0;
  const arr = new Array(500).fill(1).forEach((_) => {
    if (num !== 1) {
      count++;
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
  });
  return num === 1 ? count : -1;
}
