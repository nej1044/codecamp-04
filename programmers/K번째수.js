function solution(array, commands) {
  var answer = [];
  for (var x = 0; x < commands.length; x++) {
    var i = commands[x][0] - 1;
    var j = commands[x][1];
    var k = commands[x][2] - 1;

    var newArray = [];
    for (var i = i; i < j; i++) {
      newArray.push(array[i]);
    }
    newArray.sort((a, b) => b - a);
    answer.push(newArray[k]);
  }
  return answer;
}