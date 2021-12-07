function solution(s, n) {
  var answer = "";
  const UpperStr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const LowerStr = [];
  for (let i = 0; i < UpperStr.length; i++) {
    LowerStr.push(UpperStr[i].toLowerCase());
  }
  const newArr = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (UpperStr.includes(s[i])) {
      newArr.splice(i, 1, UpperStr[(UpperStr.indexOf(s[i]) + n) % 26]);
    } else if (LowerStr.includes(s[i])) {
      newArr.splice(i, 1, LowerStr[(LowerStr.indexOf(s[i]) + n) % 26]);
    }
  }
  answer = newArr.join("");
  return answer;
}

// 멘토님 풀이

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let index = alphabet.indexOf(s[i]);
    const word =
      index > 25 ? alphabet.slice(26, alphabet.length) : alphabet.slice(0, 26);

    index = word.indexOf(s[i]) + n;
    if (index >= 26) {
      index -= 26;
    }
    anwer += word[index];
  }
}

// 메서드로 풀어보기
function solution(s, n) {
  const answer = s.split("").map((str) => {
    if (str === " ") return str;
    const word = lower.includes(str) ? lower : upper;
    let index = word.indexOf(str) + ㅜ;

    if (index >= 26) {
      index -= 26;
    }
    return word[index];
  });
  return answer.join("");
}

// charCode로 풀어보기
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      index = index - 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}
