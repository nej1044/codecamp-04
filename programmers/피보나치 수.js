function solution(n) {
  var answer = 0
  const newArr = [0, 1]
  let prev = 0
  let curr = 1

  for (let i = 2; i <= n; i++) {
    newArr[i] = (prev + curr) % 1234567
    prev = curr
    curr = newArr[i]
  }

  answer = newArr[n]
  return answer;
}

// 피보나치 수는 조금만 숫자가 커져도 표현할 수 있는 Int의 범위를 넘기므로
// n번째 피보나치 수의 % 1234567의 값을 알고 싶다면 매 연산마다 (A+B)의 %1234567을 해주는 것이 좋다.

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
      } else {
          answer += s[i]; // 순환하면서 숫자라면 answer에 더함
      }
  }

  return Number(answer);
}