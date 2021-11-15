function solution(s) {
  var answer = "";
  const newS = [];
  for (let i = 0; i < s.length; i++) {
    if (
      i === 0 ||
      newS[i - 1] === " " ||
      newS[i - 1] === s[i - 1].toLowerCase()
    ) {
      newS.push(s[i].toUpperCase());
    } else if (newS[i - 1] === s[i - 1].toUpperCase()) {
      newS.push(s[i].toLowerCase());
    } else if (s[i] === " ") {
      newS.push(" ");
    }
  }
  answer = newS.join("");
  return answer;
}

// 메서드로 풀기
function solution(s) {
  const answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}
