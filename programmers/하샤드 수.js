function solution(x) {
  var answer = true;
  x = String(x)
  let q = 0;

  for (let i = 0; i < x.length; i++) {
    q += Number(x[i]);
  }
  if (x % q !== 0) {
    answer = false;
  }
  return answer;
}