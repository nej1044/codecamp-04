function solution(array, commands) {
  var answer = [];
  for (var x = 0; x < commands.length; x++) {
    var i = commands[x][0];
    var j = commands[x][1];
    var k = commands[x][2];

    const result = array.splice(i - 1, j);
    result.sort((a, b) => b - a);
    answer.push(newArray[k - 1]);
  }
  return answer;
}

// 메서드로 풀어보기

function solution(array, commands) {
  commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => b - a);
    result[el[2] - 1];
  });
}
