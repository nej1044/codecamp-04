function solution(a, b) {
  var answer = '';
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const DayOfWeek = week[new Date(2016 + "-" + a + "-" + b).getDay()];
  answer = DayOfWeek
  return answer;
}