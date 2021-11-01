function solution(phone_number) {
  let newPhone_number = [];
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      newPhone_number.push('*')
    } else if (i >= phone_number.length - 4) {
      newPhone_number.push(phone_number[i])
    }
  }
  const answer = newPhone_number.join('')
  return answer;
}