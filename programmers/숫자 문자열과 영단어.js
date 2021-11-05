function solution(s) {
  let answer = "";
  let temp = "";

  const word_arr =
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (let i=0; i<s.length; i++){
      if(!Number(s[i])){
          temp += s[i]; // 순환하면서 숫자가 아닌 string은 temp에 더해줌
          if (word_arr.includes(temp)){ // temp가 word_arr에 포함되어 있다면 숫자로 변환
              answer += word_arr.indexOf(temp);
              temp = ""; // temp 초기화
          }
          if(s[i] === "0") {
                  answer += "0" // 0일 경우에는 0 더함
              }
      } else {
          answer += s[i]; // 순환하면서 숫자라면 answer에 더함
      }
  }

  return Number(answer);
}