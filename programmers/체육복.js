function solution(n, lost, reserve) {
  var answer = 0;
  var newReserve = [];
  var newLost =[];
  answer = n-lost.length;
  for(var i=0; i<reserve.length; i++) {
      if(lost.indexOf(reserve[i]) == -1) {
          newReserve.push(reserve[i]);
      } else {
          answer++;
      }
  }
  for(var i=0; i<lost.length; i++) {
      if(reserve.indexOf(lost[i]) == -1) {
          newLost.push(lost[i]);
      }
  }
  
  for(var i=0; i<newLost.length; i++) {
      if(newReserve.includes((newLost[i])+1)) {
          delete newReserve[newReserve.indexOf(newLost[i]+1)];
          answer++;
      } else if(newReserve.includes(newLost[i]-1)) {
          delete newReserve[newReserve.indexOf(newLost[i]-1)];
          answer++;
       }
  }
  return answer;
}