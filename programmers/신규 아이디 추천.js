// 정규표현식을 사용하여 검증하기

function solution(new_id) {
  var answer = new_id;
  // 소문자로 만들어주기
  answer = answer.toLowerCase()
  // 문자, 특수문자, 숫자 제외 나머지는 제거
  answer = answer.replace(/[^a-z0-9-_.]/g, '')
  // 특수문자에서 -_ 제외하고 .은 한개 이상이면 제거
  answer = answer.replace(/\.+/g, '.')
  // .이 첫번째나 마지막 문자이면 제외
  answer = answer.replace(/^\.|\.$/g, '')

  if (!answer) {
    answer += 'a'
  }

  if (answer.length >= 16) {
    answer = answer.substring(0, 15)
  }
  answer = answer.replace(/\.$/, '');
  
  while (answer.length <= 2) {
    answer += answer.charAt(answer.length-1)
  }
  return answer;
}