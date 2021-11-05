function solution(n, lost, reserve) {
  var answer = 0;
  lost.sort((a,b)=>a-b)
  reserve.sort((a,b)=>a-b)
  answer = n-lost.length;
  // 체육복을 잃어버리지 않은 학생
  for(let i=0; i<lost.length; i++) {
          // 체육복을 잃어버려 체육복이 없는 학생
      if (reserve.indexOf(lost[i]) === -1) {
          continue;
      } else {
          // 체육복을 잃어버렸지만, 체육복이 1개인 학생
          reserve.splice(reserve.indexOf(lost[i]), 1)
          lost.splice(i, 1)
          answer++
      }
  }
  // 체육복을 잃어버리지 않았고, 체육복이 2개인 학생에게 빌리기
  for(let i=0; i<lost.length; i++) {
      if(reserve.includes(lost[i]+1)) {
          reserve.splice(reserve.indexOf(lost[i]+1), 1)
          answer++
      } else if (reserve.includes(lost[i]-1)) {
          reserve.splice(reserve.indexOf(lost[i]-1), 1)
          answer++
      }
  }
   return answer
}