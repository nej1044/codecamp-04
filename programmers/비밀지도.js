function solution(n, arr1, arr2) {
  let temp = []
  var answer = [];
  arr1.forEach(function(item,idx) {
      arr1[idx] = item.toString(2).padStart(n, '0')
  })
  arr2.forEach(function(item,idx) {
      arr2[idx] = item.toString(2).padStart(n, '0')
  })

  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      if(arr1[i][j] === '0' && arr1[i][j]===arr2[i][j]) {
        temp.push(' ')
      } else {
        temp.push('#')
      }
    }
    answer.push(temp.join(''))
    temp =[]
  }
  return answer;
}