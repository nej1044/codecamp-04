function solution(s) {
  var answer = "";
  answer = s
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return answer;
}
