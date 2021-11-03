function solution(arr) {
  var answer = [];

  let small = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > small) continue
    small = arr[i]
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== small) continue
    arr.splice(i, 1)
  }

  if (arr.length === 0) {
    answer = [-1]
  } else {
    answer = arr
  }

  return answer;
}